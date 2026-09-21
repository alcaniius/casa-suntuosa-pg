# syntax=docker/dockerfile:1

# Stage 1: Build static assets
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package manifests for dependency layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application source
COPY . .

# Build Astro static output
RUN pnpm build

# Stage 2: Production web server (Nginx Alpine)
FROM nginx:alpine AS runner

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port (Dokploy maps this port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
