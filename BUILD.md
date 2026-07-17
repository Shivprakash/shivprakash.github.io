# How to Build and Run

## Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Verify installation by running:

```bash
node --version
npm --version
```

### Install dependencies

```bash
npm install 
```

### Run the development server:
    
```bash 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
npm run build
```

Static files are written to `./out` (Next.js `output: 'export'`).

### Deploy to Cloudflare (`profile` Worker)

```bash
npm run deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for custom domains (`profile.shiv.io`, `shivprakash.in`).

### Run the production server (local Node)

```bash         
npm run start
``` 
