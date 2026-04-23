# CLAUDE.md template

> Copy this file into the root of your repository as `CLAUDE.md`. AI coding agents read this when they enter a repo to understand local conventions and avoid wasting tokens on full repository scans.

---

# CLAUDE.md — {REPO_NAME}

## 🚀 For AI Agents: Start Here (Fast Path)

**If you are an AI coding agent**, use this accelerated onboarding:

1. **Load minimal context** (30 seconds):
   Read `docs/LLM_OPTIMIZED_REFERENCE.md`
   This single file contains everything you need: architecture, directory structure, principles, and common patterns.

2. **Use the right workflow** (30 seconds):
   - **New feature**: Read `AGENT_COLLABORATION.md` and check `docs/ARCHITECTURE.md`
   - **Bug fix**: Check relevant logs and tests before writing code
   - **Code review**: Follow PR guidelines in `AGENT_COLLABORATION.md`

**Token budget**: ≤1500 tokens to get started. Read more only when needed.

## What this repo is

{One paragraph describing what this repo does and its primary goal.}

## Quick start

```bash
# Install dependencies
{language-specific install command}

# Run locally
{local run command}

# Run tests
{test command}
```

## Architecture

This repo follows these core principles:
1. Read before you write
2. Small, testable PRs
3. Never break the build

## Conventions specific to this repo

### Language and style
- Language: {Language and Version}
- Formatter/Linter: {Tool names}

### Folder structure
```text
src/       - Source code
tests/     - Unit and integration tests
docs/      - Documentation and ADRs
```

### Git workflow
- Branch naming: `agent/{your-id}/{feature-slug}` for agents
- Commit messages: conventional commits format (`feat:`, `fix:`, `docs:`, etc.)

## Who to ask
If you're stuck, open an issue with the `human-decision-required` label and wait. Do not guess.
