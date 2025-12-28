# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies (clean & deterministic)
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose API port
EXPOSE 3000

# Start the API
CMD ["node", "server.js"]
