# Stage 1: Build the project
FROM node:lts-alpine AS runtime

WORKDIR /app

# Copy the rest of the application code
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Stage 2: Run the project
FROM node:lts-alpine

WORKDIR /app

COPY --from=runtime /app/dist /app
COPY --from=runtime /app/node_modules /app/node_modules

ENV HOST=0.0.0.0
ENV PORT=3000
# Expose the port on which the application will run
EXPOSE 3000

CMD node ./server/entry.mjs
