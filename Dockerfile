# Stage 1: Build the application
FROM node:22-alpine3.19 AS builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Create the final image
FROM node:22-alpine3.19

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose the necessary port
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]