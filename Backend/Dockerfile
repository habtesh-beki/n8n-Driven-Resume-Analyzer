# official Node.js 18 image
FROM node:18-alpine


RUN npm install -g pnpm

# Set working directory inside the container
WORKDIR /app

# Copy config and manifest files I use this because for better catching
COPY package.json pnpm-lock.yaml tsconfig.json ./

# install dependencies
RUN pnpm install --frozen-lockfile

# Copy backend source code
COPY Backend/ ./Backend/

# Build TypeScript code to create dist file
RUN pnpm build


EXPOSE 3000

# Start the  app
CMD ["pnpm", "start"]