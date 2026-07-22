FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY tsconfig.json ./
COPY migrate.config.cjs ./
COPY migrations ./migrations
COPY src ./src
RUN npm run build

ENV NODE_ENV=production

EXPOSE 8000

CMD ["npm", "start"]
