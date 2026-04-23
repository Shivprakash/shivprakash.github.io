# Agent Collaboration Principles

> **Purpose**: Complete rules for multi-agent coordination and parallel work
> **Audience**: AI agents working in this repository
> **Reading time**: 5 minutes
> **Token estimate**: ~1500 tokens

---

## The 13 collaboration principles

### Principle 1: Read before you write
Before writing code, agents must read the minimal context (CLAUDE.md, LLM_OPTIMIZED_REFERENCE.md) and understand the architecture. Check for open issues to avoid duplicating work.

### Principle 2: One agent, one feature branch, one purpose
Every agent works on a feature branch named `agent/{agent-id}/{feature-slug}`. Do not bundle multiple features in one branch.

### Principle 3: Claim before you build
Before starting work, open a GitHub issue titled `[CLAIM] {feature description}`. If two agents claim overlapping work, the earlier issue wins.

### Principle 4: Small PRs, fast merges
Target PR size: under 500 lines of changed code. Large PRs are hard for humans and other agents to review.

### Principle 5: Tests are not optional
No PR merges without tests. Run tests locally before pushing.

### Principle 6: Contracts are sacred
When modifying public APIs, schemas, or boundaries, bump versions and maintain backward compatibility.

### Principle 7: Exclusivity Locks
For database migrations or infrastructure changes, use a PR label like `lock:db-migration` to prevent overlapping runs.

### Principle 8: Status updates
For long-running tasks, post a status update comment on the PR every 30 minutes.

### Principle 9: Handoffs via PR description
If you cannot finish a task, open a PR with `[WIP - HANDOFF NEEDED]` and write a structured handoff detailing what is done, what is missing, and open questions.

### Principle 10: No silent assumptions
Document non-obvious decisions in code comments or ADRs (Architecture Decision Records).

### Principle 11: Observability is part of the feature
A feature is not done until it has proper logging, metrics, or error tracking.

### Principle 12: When in doubt, ask the human
Do not make assumptions regarding compliance, security, cost, or UX. Open an issue tagged `human-decision-required`.

### Principle 13: Agent Memory & Tracking
Agents must maintain a continuous memory of their operations to ensure traceability and easy handoffs:
- **Session Logs (`logs/sessions/YYYYMMDD_session_name.md`)**: Create and update a session log summarizing prompt chains, steps taken, issues faced, and terminal commands executed.
- **Task Tracking (`logs/completed-tasks/COMPLETED_TASKS.md` or `tasks/backlog.md`)**: Update tracking documents when a task state transitions (e.g., from `.CLAIMED` to `.DONE`).
- **Reports (`logs/reports/CONSOLIDATED_REPORTS.md`)**: Append high-level execution results such as integration test runs and deployments to the reports file.

---

## The golden rule
> **Leave the codebase better than you found it, in a state another agent (or human) can understand without you.**
