# Use official Node.js 18 image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory inside the container
WORKDIR /app

# Copy config and manifest files for better caching
COPY package.json pnpm-lock.yaml tsconfig.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy backend source code
COPY Backend/ ./Backend/

# Build TypeScript code
RUN pnpm build

# Expose the backend port
EXPOSE 3000

# Start the compiled app
CMD ["pnpm", "start"]