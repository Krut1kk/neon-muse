# Neon Muse

A showcase of AI creators: browse four virtual personalities, open a profile, preview a conversation and continue in Telegram.

## Live concept

AI creator showcase built as a frontend prototype for a headless AI platform.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Four distinct AI creator identities, each with its own accent theme
- Mobile-first responsive UI
- Interactive creator profiles in an accessible native `<dialog>`
- Mock AI conversation flow with prompt-specific responses
- Typing indicator between prompt and response
- Shareable creator URLs (`/?creator=sofia`)
- Telegram CTA
- Optimized Next.js images with selective preload
- Reduced-motion support

## Product decisions

1. **Mobile-first.** The product is aimed at traffic landing pages and Telegram flows, where most visitors arrive on a phone.
2. **Mock AI.** No backend on purpose: the task is a frontend prototype. Prompts and responses live in `data/creators.ts`.
3. **Reusable components.** Creator card, modal, chat preview and the small primitives in `shared/ui` are shared by every creator; each creator differs only by data.
4. **URL state.** The open creator is stored in the `creator` query param, so a profile can be shared and reopened by link.
5. **Performance.** `next/image` with proper `sizes`; only the hero image above the fold is preloaded.

## Project structure

```
app/          layout, page, metadata, favicon, OG image
components/   page sections and creator components
data/         mock creator data
types/        TypeScript types
shared/
  config/     links and site URL
  lib/        small helpers
  ui/         reusable UI primitives
public/       creator avatars
```

## Run locally

```bash
npm install
npm run dev
```

## Check

```bash
npm run typecheck
npm run build
```
