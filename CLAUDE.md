@AGENTS.md

## Internal folder

`internal/` is gitignored — it's for AI-collaboration material (plans, drafts,
guidelines, canned prompts) that isn't part of the public site. Everything outside
`internal/` is public-facing (it's what gets built and deployed), so be mindful of that
distinction when creating files.

Structure:
- `Aichat/MainIndex/` — the invoke protocol (see below)
- `Aichat/Guidelines/` — durable reference docs for recurring tasks
- `Aichat/PromptsToAichat/` — canned prompts the user re-sends verbatim
- `Aichat/AichatToMe/` — drafts/notes the agent produces for the user to review
- `Aichat/RepliesToAichat/` — content the user pastes in for the agent to read
- `Plans/` — plans and progress trackers for multi-step initiatives (e.g. the redesign)
- `Content/` — drafts of site copy/writing before it goes live
- `references/` — reference material and links

## Invoke Protocol

When the user writes the keyword `invk*` anywhere in their message, it means: read the
index file, find all purposes relevant to the current task, read those instruction docs,
and follow them.

Entry point: `internal/Aichat/MainIndex/entry-point.txt`
Index file: `internal/Aichat/MainIndex/index.txt`

The index maps purposes to instruction documents — read only the ones relevant to the
current task.
