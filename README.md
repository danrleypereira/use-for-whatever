# Forge UI

A modern, production-ready template for building full-stack React applications using React Router and TypeScript.

## Features

- 🚀 Server-side rendering with React Router
- ⚡️ Hot Module Replacement (HMR)
- 🔒 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🧪 ESLint/Prettier for code quality
- 🐳 Docker setup for development and production
- 🌐 Custom hostname access via Nginx

## Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Or use Docker with custom hostname
./setup-custom-domain.sh
```

### Custom Hostname Access

The application can be accessed via `forge-ui.kbra.vm` using the provided setup script:

```bash
chmod +x setup-custom-domain.sh
./setup-custom-domain.sh
```

The script will:

1. Add an entry to your hosts file (requires sudo)
2. Set up required directories
3. Start the application in your chosen mode (development or production)

## Development Workflow

### Local Development

```bash
# Start the development server
pnpm dev

# Check code for errors
pnpm lint

# Format code
pnpm format

# Type check
pnpm typecheck
```

### Docker Development

```bash
# Start development environment with HMR
docker compose up -d nginx dev

# View logs
docker compose logs -f dev
```

## Production Deployment

```bash
# Build for production
pnpm build

# Using Docker with Node.js server
docker compose up -d app

# Using Docker with Nginx (recommended)
docker compose up -d nginx-prod
```

## Troubleshooting

If you encounter issues with the custom hostname setup:

1. **Verify hosts file entry**:

   ```bash
   cat /etc/hosts | grep forge-ui.kbra.vm
   ```

2. **Restart Docker containers**:

   ```bash
   docker compose down
   docker compose up -d nginx dev
   ```

3. **View logs**:

   ```bash
   docker compose logs nginx
   docker compose logs dev
   ```

4. **HMR not working?**:
   - Clear browser cache (Ctrl+F5)
   - Check browser console for WebSocket errors
   - Restart containers and refresh the page

## Project Structure

```
forge-ui/
├── app/                  # Application source code
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── routes/           # Route definitions
│   └── styles/           # CSS files
├── nginx/                # Nginx configuration
├── public/               # Static assets
├── .husky/               # Git hooks
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose services
├── vite.config.ts        # Vite configuration
└── setup-custom-domain.sh # Helper script
```

## Documentation

For more detailed information, see the following documentation:

- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)
- [ESLint Configuration](docs/eslint.md)

## References

- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TailwindCSS](https://tailwindcss.com/docs/)
- [Docker](https://docs.docker.com/)
- [Vite](https://vitejs.dev/guide/)
- [Nginx](https://nginx.org/en/docs/)

---

Built with ❤️ using React Router.
