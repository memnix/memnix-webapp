# Stage 1: Build the project
FROM node:18-alpine AS build

RUN apk --no-cache update && rm -rf /var/cache/apk/*

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the project
RUN yarn i18n && yarn build

# Stage 2: Create the production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["yarn", "serve"]
