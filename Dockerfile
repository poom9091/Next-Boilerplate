FROM node:12-alpine3.14 AS desps

WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile

FROM node:12-alpine3.14 AS builder
WORKDIR /app
COPY --from=desps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:12-alpine3.14 AS run
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]