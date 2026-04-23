# LLM Optimized Reference

> **Purpose**: A condensed, high-signal reference for AI agents to quickly understand the project without reading thousands of lines of code. Keep this under 1500 tokens.

## System Architecture
{Provide a brief diagram or bullet points explaining the high-level architecture. E.g., Frontend (React) -> API Gateway -> Microservices (Python) -> Postgres.}

## Key Technologies
- **Language**: {Primary language, e.g., TypeScript}
- **Framework**: {e.g., Next.js, Express, FastAPI}
- **Database**: {e.g., PostgreSQL, MongoDB}
- **Testing**: {e.g., Jest, Pytest}

## Directory Map
- `src/components/`: Reusable UI components.
- `src/pages/`: Route entry points.
- `src/api/`: API integration and fetch calls.
- `src/utils/`: Pure helper functions.
- `tests/`: Unit and integration test suites.

## Common Patterns

### 1. Data Fetching
{Example of how data fetching should be implemented in this repo. E.g., use React Query, or standard fetch wrappers.}

### 2. Error Handling
{Example of how to handle errors and log them.}

### 3. State Management
{Explain where state lives (Zustand, Redux, Context, etc.).}

## What to Avoid
- Do not mutate state directly.
- Do not add new external dependencies without permission.
- Do not write inline CSS unless unavoidable; use the existing styling framework.
