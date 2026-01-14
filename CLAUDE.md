# Claude Code Instructions

## Git Workflow

1. **Commit after each code change** - Make small, atomic commits after completing each change
2. **Push to GitHub periodically** - Push commits to origin regularly to keep remote in sync
3. **Do NOT deploy to Firebase** unless specifically requested by the user

## Project Info

- **Framework**: SvelteKit 5 with TypeScript
- **Hosting**: Firebase Hosting (static adapter)
- **Build**: `npm run build` outputs to `/build`
- **Dev server**: `npm run dev`
- **Deploy**: `firebase deploy` (only when requested)
