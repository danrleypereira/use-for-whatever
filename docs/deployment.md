# Deployment Guide

This guide covers the deployment options for the Forge UI application.

## Building for Production

Create an optimized production build:

```bash
pnpm build
```

This will generate production-ready files in the `build` directory.

## Deployment Options

### 1. Node.js Server

You can run the application using the built-in Node.js server:

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

### 2. Docker Deployment

#### Using the Node.js-based Server

```bash
# Start the Node.js-based production server
docker compose up -d app
```

This will build and start the application using the Node.js server on port 3000.

#### Using Nginx (Recommended)

```bash
# Start the Nginx-based production server
docker compose up -d nginx-prod
```

This approach:

- Uses multi-stage builds for smaller images
- Serves static files through Nginx for better performance
- Includes proper caching and compression settings

#### Standalone Container

You can also build and run a standalone container:

```bash
# Build the image
docker build -f Dockerfile.nginx -t forge-ui:nginx .

# Run the container
docker run -p 80:80 forge-ui:nginx
```

### 3. Custom Hostname Deployment

To deploy with the custom hostname `forge-ui.kbra.vm`:

```bash
# Run the setup script and choose the production option
./setup-custom-domain.sh
```

Then select option 2 for the production environment.

## Environment Variables

Production deployments can be configured with the following environment variables:

| Variable   | Description             | Default      |
| ---------- | ----------------------- | ------------ |
| `NODE_ENV` | Environment mode        | `production` |
| `PORT`     | Port for Node.js server | `3000`       |

## Deployment Platforms

The containerized application can be deployed to various platforms:

- AWS ECS/EKS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## CI/CD Pipeline

The project includes a GitLab CI configuration (`.gitlab-ci.yml`) that handles:

- Dependency installation
- Linting and type checking
- Building and testing
- Deployment to staging and production environments

Customize the CI/CD pipeline for your specific infrastructure and deployment targets.
