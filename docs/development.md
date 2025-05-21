# Development Guide

This guide covers the development workflow for the Forge UI application.

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)
- [Docker](https://www.docker.com/) (optional, for containerized development)

### Development Server

Start the local development server:

```bash
pnpm dev
```

This will start a Vite development server with HMR at `http://localhost:5173`.

### Code Quality Tools

We use several tools to maintain code quality:

#### Linting

```bash
# Run ESLint to check code
pnpm lint

# Fix automatically fixable issues
pnpm lint:fix
```

#### Formatting

```bash
# Format code with Prettier
pnpm format

# Check if code is properly formatted
pnpm format:check
```

#### Type Checking

```bash
# Run TypeScript type checking
pnpm typecheck
```

### Git Hooks

The project uses Husky to run pre-commit hooks:

- **pre-commit**: Runs lint-staged to check and format code

## Docker Development

For a more consistent development environment, we provide Docker support:

```bash
# Start the development environment
docker compose up -d nginx dev

# View logs
docker compose logs -f dev

# Stop all containers
docker compose down
```

## Custom Hostname Development

For development with the custom hostname `forge-ui.kbra.vm`:

```bash
# Run the setup script
./setup-custom-domain.sh
```

This will:

1. Add an entry to your hosts file (requires sudo)
2. Create necessary directories
3. Offer to start the application in development or production mode

### HMR with Custom Hostname

When using the custom hostname setup, HMR should work automatically without any additional configuration. If you experience issues:

1. Check browser console for WebSocket errors
2. Restart the containers:
   ```bash
   docker compose down
   docker compose up -d nginx dev
   ```
3. Clear browser cache with a hard refresh (Ctrl+F5)

## Working with React Router

This project uses React Router v7 for routing. The routes are defined in the `app/routes` directory.

Key files:

- `app/routes.ts`: The main routes configuration
- `app/routes/_layout.tsx`: The main layout component used by all routes

## Adding New Components

When adding new components, place them in the appropriate directory:

- Reusable components: `app/components/`
- Page components: `app/pages/`
- Route components: `app/routes/`

Follow the existing code style and patterns for consistency.
