export default function WordHeatmap({ words }: { words: { text: string; value: number }[] }) {
  if (!words || words.length === 0) return null;

  // find max value for relative scaling
  const maxVal = Math.max(...words.map(w => w.value));
  const minVal = Math.min(...words.map(w => w.value));

  return (
    <div className="bg-surface border border-divider p-7 rounded-lg mb-10">
      <h3 className="font-heading font-bold text-foreground mb-5 uppercase tracking-wider text-base border-b border-divider pb-2.5">
        Topic Heatmap
      </h3>
      <div className="flex flex-wrap gap-x-5 gap-y-2.5 justify-center items-center">
        {words.map(word => {
          // Calculate scale ratio between 0 and 1
          const ratio = maxVal === minVal ? 0.5 : (word.value - minVal) / (maxVal - minVal);
          
          // Map ratio to tailwind text sizes and opacities mentally
          // size from 0.8rem to 1.8rem
          const sizeStr = `${0.8 + ratio * 1}rem`;
          
          // Opacity from 0.4 to 1.0
          const opacity = 0.4 + ratio * 0.6;

          return (
            <span
              key={word.text}
              style={{
                fontSize: sizeStr,
                opacity: opacity,
                color: 'var(--accent)'
              }}
              className="hover:text-accent-hover transition-colors select-none"
              title={`Occurrences: ${word.value}`}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
