# CLAUDE.md — shivprakash.github.io

## 🚀 For AI Agents: Start Here (Fast Path)

**If you are an AI coding agent**, use this accelerated onboarding:

1. **Load minimal context** (30 seconds):
   Read `docs/LLM_OPTIMIZED_REFERENCE.md`
   This single file contains everything you need: architecture, directory structure, principles, and common patterns.

2. **Use the right workflow** (30 seconds):
   - **New feature**: Read `docs/AGENT_COLLABORATION.md` and `docs/SKILLS_TECHNICAL.md`
   - **Quality Check**: Refer to `docs/SKILLS_PRODUCTION_GRADE.md`
   - **Bug fix**: Check relevant logs and tests before writing code
   - **Code review**: Follow PR guidelines in `docs/AGENT_COLLABORATION.md`

**Token budget**: ≤1500 tokens to get started. Read more only when needed.

## What this repo is

This repository contains the source code for a personal/research portfolio website built with Next.js App Router. It serves as a digital portfolio and technical blog, relying on Markdown for content and modern styling via Tailwind CSS.

## Quick start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Run tests
npm run lint
```

## Architecture

This repo follows these core principles:
1. Read before you write
2. Small, testable PRs
3. Never break the build

## Conventions specific to this repo

### Language and style
- Language: TypeScript, Next.js 15
- Formatter/Linter: ESLint, Prettier, Tailwind CSS

### Folder structure
```text
src/app/       - Next.js App Router entry points
src/components/ - Reusable React components
src/lib/       - Utility functions
src/content/   - Markdown/MDX blog posts and content
src/data/      - JSON/TypeScript static data files
src/temp/      - Temporary assets (CV, PDFs, etc.)
docs/          - Documentation and Agent rules
```

### Git workflow
- Branch naming: `agent/{your-id}/{feature-slug}` for agents
- Commit messages: conventional commits format (`feat:`, `fix:`, `docs:`, etc.)

## Who to ask
If you're stuck, open an issue with the `human-decision-required` label and wait. Do not guess.
