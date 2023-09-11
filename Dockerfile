# Stage 1: Build the project
FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

# Copy the application code
COPY . .

RUN yarn build

# remove development dependencies
RUN rm -rf node_modules

FROM node:lts-alpine AS dep

WORKDIR /app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile --production

RUN rm -rf node_modules/@vscode \
  && rm -rf node_modules/vscode-languageserver-protocol \
  && rm -rf node_modules/vscode-oniguruma \
  && rm -rf node_modules/typescript \
  && rm -rf node_modules/@astrojs/language-server \
  && rm -rf node_modules/shiki \
  && rm -rf node_modules/@types \
  && rm -rf node_modules/@esbuild \
  && rm -rf node_modules/esbuild-linux-64 \
  && rm -rf node_modules/vscode-css-languageservice \
  && rm -rf node_modules/vscode-html-languageservice \
    && rm -rf node_modules/@iconify \
    && rm -rf node_modules/@intlify \
    && rm -rf node_modules/@rollup \
    && rm -rf node_modules/vue \
    && rm -rf node_modules/@babel \
    && rm -rf node_modules/web-streams-polyfill \
    && rm -rf node_modules/openapi-typescript \
    && rm -rf node_modules/nuxi \
    && rm -rf node_modules/eslint \
    && rm -rf node_modules/tailwindcss \
    && rm -rf node_modules/daisyui


# Stage 2: Use Google Distroless as production image
FROM gcr.io/distroless/nodejs18:nonroot AS production

WORKDIR /app

# Copy the built project from the runtime stage
COPY --from=build --chown=nonroot /app .
COPY --from=dep --chown=nonroot /app/node_modules ./node_modules

# Set NODE_ENV to production
ENV NODE_ENV=production

ENV HOST=0.0.0.0
ENV PORT=1809

USER nonroot

# Expose the port on which the application will run
EXPOSE 1809


CMD ["./.output/server/index.mjs"]
