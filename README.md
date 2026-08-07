# BB Notifications

A private [BB](https://github.com/ymichael/bb) plugin for notification integrations.

This repository currently contains only the backend and frontend plugin scaffold. Notification behavior is intentionally out of scope for the initial setup.

## Requirements

- BB 0.35 or newer
- Node.js 22 or newer
- npm

The manifest targets BB plugin SDK `^0.4.1`, matching the SDK bundled with BB 0.35.1 when this repository was created. Portable SDK declarations are vendored in [`types/`](types/).

## Development

```sh
npm ci
npm run typecheck
npm test
npm run build
```

`npm run build` writes installable backend and frontend artifacts to `dist/`.

## Install locally

```sh
bb plugin install . --yes
bb plugin reload notifications
bb plugin list
```

After source changes, rebuild and reload the plugin:

```sh
npm run build
bb plugin reload notifications
```

For a rebuild-and-reload watch loop, use `bb plugin dev`.

## Repository layout

- `server.ts` — backend plugin entry
- `app.tsx` — frontend plugin entry
- `types/` — declarations for the bundled BB plugin SDK
- `components/`, `hooks/`, `lib/` — vendored frontend support from the BB scaffold
- `tests/` — baseline repository tests

## License

Private and proprietary. No license is granted; see [LICENSE](LICENSE).
