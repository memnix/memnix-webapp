# Stage 1: Build the project
FROM node:lts-alpine AS runtime

WORKDIR /app

# Copy only the package.json and yarn.lock files for installing production dependencies
COPY package*.json yarn.lock ./
RUN yarn install --production

# Copy the rest of the application code
COPY . .
RUN yarn build

# Stage 2: Use Google Distroless as production image
FROM gcr.io/distroless/nodejs:18 AS production

WORKDIR /app

# Copy the built project from the runtime stage
COPY --from=runtime /app/dist ./dist
COPY --from=runtime /app/node_modules ./node_modules

# Set NODE_ENV to production
ENV NODE_ENV=production

ENV HOST=0.0.0.0
ENV PORT=1809

# Expose the port on which the application will run
EXPOSE 1809


CMD ["./server/entry.mjs"]
