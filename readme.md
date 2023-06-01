# SampleWeb

Sample bare-bones frontend with relevant tooling

# Configuration

`.env` files are used for configuration. The following priority is used:

1. `prod.env`
2. `dev.env`
3. `local.env`

`prod.env` and `dev.env` are not checked into source control. `local.env` is checked in, but should not be used in production.

# Building

- `npm run build` - Build everything
- `npm run build-css` - Build only the CSS
- `npm run build-pack` - Build only the JS
- `npm run build-tsc` - Build only the webserver
- `npm run build-dev` - Build only CSS and client-side JS

# Running

- `npm run start` - Starts the webserver

## Development

- `npm run watch` - Starts the webserver and restarts on changes
- `npm run dev` - Rebuilts client-side files and starts the webserver


