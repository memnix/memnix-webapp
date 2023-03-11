# Stage 1: Build the project
FROM node:lts-alpine AS runtime

WORKDIR /app

# Copy the rest of the application code
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Stage 2: Run the project
FROM node:lts-alpine AS production

WORKDIR /app

# Copy the built project
COPY --from=runtime /app .

ENV HOST=0.0.0.0
ENV PORT=1809
# Expose the port on which the application will run
EXPOSE 1809

CMD node ./dist/server/entry.mjs
