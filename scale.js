const fs = require('fs');
const path = require('path');

const scaleTailwindSpacing = (val) => {
    // Standard map
    const scales = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];
    const target = val * 1.25;
    let closest = scales[0];
    for (const v of scales) {
        if (Math.abs(v - target) < Math.abs(closest - target)) {
            closest = v;
        }
    }
    return closest;
};

const mapText = {
    'text-xs': 'text-sm',
    'text-sm': 'text-base',
    'text-base': 'text-lg',
    'text-lg': 'text-xl',
    'text-xl': 'text-2xl',
    'text-2xl': 'text-3xl',
    'text-3xl': 'text-4xl',
    'text-4xl': 'text-5xl',
    'text-5xl': 'text-6xl',
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Scale text-[xxpx]
    content = content.replace(/text-\[(\d*\.?\d+)px\]/g, (match, val) => `text-[${Math.round(parseFloat(val) * 1.25)}px]`);
    
    // Scale text-[xxrem]
    content = content.replace(/text-\[(\d*\.?\d+)rem\]/g, (match, val) => `text-[${parseFloat(val) * 1.25}rem]`);
    
    // Scale size={x}
    content = content.replace(/size={(\d+(?:\.\d+)?)}/g, (match, val) => `size={${Math.round(parseFloat(val) * 1.25)}}`);
    
    // Scale tailwind text- sizes
    content = content.replace(/\btext-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)\b/g, (match) => mapText[match]);
    
    // Scale top/bottom etc tailwind spacing prefixes
    const spacingPrefixes = ['p', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr', 'gap', 'gap-x', 'gap-y', 'w', 'h', 'size', 'top', 'bottom', 'left', 'right', 'rounded'];
    
    const prefixRegex = new RegExp(`\\b(${spacingPrefixes.join('|')})-([0-9]+(?:\\.[0-9]+)?)\\b`, 'g');
    content = content.replace(prefixRegex, (match, prefix, num) => {
        const val = parseFloat(num);
        return `${prefix}-${scaleTailwindSpacing(val)}`;
    });

    // Handle screen width limits since those are used for layouts
    const mwMap = {
        'max-w-screen-md': 'max-w-screen-lg',
        'max-w-screen-lg': 'max-w-screen-xl',
        'max-w-7xl': 'max-w-full px-12' 
    };
    content = content.replace(/\b(max-w-screen-md|max-w-screen-lg|max-w-7xl)\b/g, (match) => mwMap[match] || match);

    fs.writeFileSync(filePath, content, 'utf8');
}

const getFiles = (dir, filesList = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory() && !filePath.includes('node_modules')) {
            getFiles(filePath, filesList);
        } else if (filePath.endsWith('.tsx')) {
            filesList.push(filePath);
        }
    }
    return filesList;
};

const rootDir = process.cwd();
const components = getFiles(path.join(rootDir, 'src/components'));
const app = getFiles(path.join(rootDir, 'src/app'));

[...components, ...app].forEach(processFile);
console.log('Scaling done successfully');
