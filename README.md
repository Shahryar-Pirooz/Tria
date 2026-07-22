<div align="center">
  <img src="src/assets/images/logo.svg" alt="Tria" width="180" />

  <h1>Passwords derived. Never stored.</h1>

  <p>
    A private, deterministic password generator that runs entirely in your browser.
  </p>

  <p>
    <strong>No vault.</strong>
    &nbsp;·&nbsp;
    <strong>No account.</strong>
    &nbsp;·&nbsp;
    <strong>No cloud sync.</strong>
  </p>
</div>

---

## About

Tria generates strong, repeatable passwords from three values:

- Your master secret
- Your username
- The website domain

The same inputs always produce the same password, allowing you to recreate passwords when needed instead of storing them in a database.

Everything happens locally in the browser. Tria does not send your inputs or generated passwords to a server.

## How It Works

```text
master secret ── Argon2id ──┐
                            ├── HMAC-SHA-256 ── deterministic password
username + domain ──────────┘
```

1. **Derive** — Argon2id transforms the master secret into a cryptographic key.
2. **Separate** — The normalized username, domain, algorithm version, and revision identify an account.
3. **Generate** — HMAC-SHA-256 produces deterministic bytes.
4. **Format** — The bytes become an 18-character password containing uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Fully client-side password derivation
- Deterministic output for consistent inputs
- Argon2id master-key derivation
- HMAC-SHA-256 account separation
- No password database or cloud dependency
- Automatic uppercase, lowercase, number, and symbol coverage
- Responsive interface with subtle motion
- Semantic OKLCH color system
- Built with Vue 3 and TypeScript

## Getting Started

### Requirements

- Node.js `22.18+` or `24.12+`
- pnpm

### Installation

```bash
git clone git@github.com:Shahryar-Pirooz/Tria.git
cd Tria
pnpm install
pnpm dev
```

Open the local address shown by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Type-check and create a production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm type-check` | Run Vue and TypeScript checks |
| `pnpm lint` | Run Oxc and ESLint with automatic fixes |
| `pnpm format` | Format files inside `src` |

## Tech Stack

- [Vue 3](https://vuejs.org/) — user interface
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite](https://vite.dev/) — development and build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [hash-wasm](https://github.com/Daninet/hash-wasm) — Argon2id implementation
- [Motion for Vue](https://motion.dev/) — interface animations
- [VueUse](https://vueuse.org/) — browser utilities

## Project Structure

```text
src/
├── assets/          Static images and illustrations
├── components/      Vue interface sections and shared components
├── types/           Shared TypeScript definitions
├── utils/           Password derivation logic
├── App.vue          Application layout
├── index.css        Global theme and design tokens
└── main.ts          Application entry point
```

## Security Notes

Tria's security depends heavily on the strength and secrecy of your master secret.

- Use a long, unique master secret rather than a short PIN or common phrase.
- Enter account identifiers consistently because changes produce a different password.
- Anyone with your master secret and account inputs can reproduce your passwords.
- Losing your master secret means losing the ability to regenerate your passwords.
- Review the implementation before relying on Tria for sensitive accounts.

Tria is experimental software and has not been independently audited. Use it at your own risk.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a focused feature branch.
3. Make and test your changes.
4. Run `pnpm build` and `pnpm lint`.
5. Open a pull request with a clear description.

Please keep changes focused, typed, and consistent with the existing project structure.

---

<div align="center">
  <sub>Built for people who prefer deriving passwords over storing them.</sub>
</div>
