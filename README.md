# Forge UI

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🧪 Code quality tools (ESLint, Prettier)
- 🔄 Automated linting with Git hooks
- 🐳 Docker setup for development and production
- 🚢 CI/CD pipeline configuration
- 🌐 Custom hostname access via Nginx reverse proxy

## Getting Started

### Installation

Install the dependencies using pnpm:

```bash
pnpm install
```

### Custom Hostname Setup

The application can be accessed via the custom hostname `forge-ui.kbra.vm`. You can use the provided setup script or follow the manual steps below.

#### Automated Setup (Linux/macOS)

We provide a setup script that handles everything for you:

```bash
# Make the script executable (if needed)
chmod +x setup-custom-domain.sh

# Run the setup script (may require sudo for hosts file modification)
./setup-custom-domain.sh
```

The script will:

1. Add the necessary entry to your hosts file (requires sudo)
2. Check if Docker is installed
3. Create required directories
4. Offer to start the application in development or production mode
5. Verify that services started properly

The script includes error handling to ensure that if any step fails, you'll be notified with appropriate error messages and troubleshooting tips.

#### Manual Setup

If you prefer to set things up manually:

1. **Add an entry to your hosts file**:

   ```
   # Add to /etc/hosts (Linux/macOS) or C:\Windows\System32\drivers\etc\hosts (Windows)
   127.0.0.1 forge-ui.kbra.vm
   ```

   On Linux/macOS, you can run:

   ```bash
   sudo sh -c 'echo "127.0.0.1 forge-ui.kbra.vm" >> /etc/hosts'
   ```

2. **Ensure port 80 is available** on your host machine or configure the Nginx container to use a different port.

3. **Create the nginx logs directory**:
   ```bash
   mkdir -p nginx/logs
   ```

### Development

#### Local Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

#### Using Docker with Custom Hostname

For containerized development with the custom hostname:

```bash
# Create necessary directories if they don't exist
mkdir -p nginx/logs

# Start the Nginx proxy and development server
docker compose up -d nginx dev

# View logs
docker compose logs -f dev
```

This will start the application with:

- Nginx reverse proxy on port 80
- Development server accessible via `http://forge-ui.kbra.vm`
- Hot Module Replacement (HMR) working through the proxy

### Troubleshooting Custom Hostname Access

If you encounter issues accessing `http://forge-ui.kbra.vm`:

1. **Verify hosts file entry**:

   ```bash
   # On Linux/macOS
   cat /etc/hosts | grep forge-ui.kbra.vm

   # On Windows (PowerShell)
   Get-Content "C:\Windows\System32\drivers\etc\hosts" | Select-String "forge-ui.kbra.vm"
   ```

2. **Check Nginx logs**:

   ```bash
   # If running via Docker
   docker compose logs nginx

   # Or check the log files directly
   cat nginx/logs/forge-ui.error.log
   ```

3. **Verify containers are running**:

   ```bash
   docker compose ps
   ```

4. **Test direct connectivity** to the development server:

   ```bash
   curl http://localhost:5173
   ```

5. **Restart the Nginx service**:

   ```bash
   docker compose restart nginx
   ```

6. **Docker service discovery issues**:

   ```bash
   # If you experience issues with Docker service discovery, try:
   docker compose down
   docker compose up -d nginx dev
   ```

7. **Verify Docker networking**:
   ```bash
   # Check that containers are on the same network
   docker network inspect forge-network
   ```

## Code Quality Tools

We've enhanced the development workflow with industry-standard tools:

### Linting and Formatting

Run linter to check code:

```bash
pnpm lint
```

Fix linting issues automatically:

```bash
pnpm lint:fix
```

Format your code with Prettier:

```bash
pnpm format
```

Check if your code is formatted correctly:

```bash
pnpm format:check
```

Run type checking:

```bash
pnpm typecheck
```

### Automated Quality Checks

The project is configured with:

- **Husky** - Runs pre-commit hooks to prevent committing code with issues
- **lint-staged** - Optimizes pre-commit hooks to only check modified files

These tools run automatically before each commit to ensure code quality.

## Building for Production

Create a production build:

```bash
pnpm build
```

This creates optimized production files in the `build` directory.

Start the production server locally:

```bash
pnpm start
```

## Deployment

### Docker Deployment

To build and run the application using Docker:

#### Development Mode

```bash
# Start the development environment with Nginx reverse proxy
docker compose up -d nginx dev

# View logs
docker compose logs -f dev
```

This will make the application available at http://forge-ui.kbra.vm with hot reloading.

#### Production Mode

```bash
# Using the Node.js-based server (port 3000)
docker compose up -d app

# OR using the Nginx server (port 8080)
docker compose up -d nginx-prod

# OR build and run a standalone Nginx container
docker build -f Dockerfile.nginx -t forge-ui:nginx .
docker run -p 80:80 forge-ui:nginx
```

The production mode with Nginx will be available at:

- http://forge-ui.kbra.vm:8080 (using docker-compose)
- http://forge-ui.kbra.vm (using standalone container)

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### CI/CD Integration

The project includes a GitLab CI configuration file (`.gitlab-ci.yml`) that handles:

- Dependency installation
- Linting and type checking
- Building and testing
- Deployment to staging and production environments (configurable)

## Project Structure

```
forge-ui/
├── app/                  # Application source code
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── routes/           # Route definitions
│   └── styles/           # CSS files
├── nginx/                # Nginx configurations
│   ├── forge-ui.conf     # Nginx config for Docker development environment
│   ├── production.conf   # Nginx config for production deployment
│   └── logs/             # Nginx log files directory
├── eslint.config.mjs     # ESLint configuration (v9 flat config)
├── .prettierrc           # Prettier configuration
├── .husky/               # Git hooks
├── .gitlab-ci.yml        # GitLab CI pipeline configuration
├── Dockerfile            # Main Docker configuration (Node.js-based)
├── Dockerfile.nginx      # Alternative Docker configuration (Nginx-based)
├── docker-compose.yml    # Docker Compose services definition
├── vite.config.ts        # Vite configuration with external access support
└── setup-custom-domain.sh # Helper script for setting up custom domain
```

## Best Practices

- Always run `pnpm lint` and `pnpm format` before committing changes
- Husky pre-commit hooks will prevent committing code that doesn't meet quality standards
- Use Docker for the most consistent development experience across environments
- Follow the project structure for organized code

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## References

- [React Router docs](https://reactrouter.com/)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
- [ESLint docs](https://eslint.org/docs/user-guide/getting-started)
- [Prettier docs](https://prettier.io/docs/en/index.html)
- [Docker docs](https://docs.docker.com/)
- [Nginx docs](https://nginx.org/en/docs/)
- [Vite docs](https://vitejs.dev/guide/)
- [Nginx as a reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [Vite HMR config](https://vitejs.dev/config/server-options.html#server-hmr)
- [Docker Networking](https://docs.docker.com/network/)

---

Built with ❤️ using React Router.
