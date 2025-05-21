# Multi-stage build for React Router application using pnpm
FROM node:22-alpine AS development-dependencies-env

# Install pnpm
RUN npm install -g pnpm@latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Build stage
FROM node:22-alpine AS build-env

# Install pnpm
RUN npm install -g pnpm@latest

# Set working directory
WORKDIR /app

# Copy dependencies and source code from previous stage
COPY --from=development-dependencies-env /app /app

# Build the application
RUN pnpm build

# Production stage using node to serve the application
FROM node:18-alpine AS production

# Install pnpm
RUN npm install -g pnpm@latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy build artifacts from build stage
COPY --from=build-env /app/build /app/build

# Expose port
EXPOSE 3000

# Start the React Router server
CMD ["pnpm", "start"]