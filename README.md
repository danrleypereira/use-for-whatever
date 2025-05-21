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

## Getting Started

### Installation

Install the dependencies using pnpm:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:3000`.

### Using Docker for Development

For containerized development with hot reloading:

```bash
docker compose up dev
```

This will start the application in development mode at http://localhost:3001.

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

```bash
# Using the Node.js-based image
docker compose up app

# OR using the alternative Nginx-based image for better performance
docker build -f Dockerfile.nginx -t forge-ui:nginx .
docker run -p 80:80 forge-ui:nginx
```

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
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .husky/               # Git hooks
├── .gitlab-ci.yml        # GitLab CI pipeline configuration
├── Dockerfile            # Main Docker configuration (Node.js-based)
├── Dockerfile.nginx      # Alternative Docker configuration (Nginx-based)
├── docker-compose.yml    # Docker Compose services definition
└── nginx.conf            # Nginx configuration for production
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

---

Built with ❤️ using React Router.
