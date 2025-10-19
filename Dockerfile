FROM node:18-alpine AS builder

WORKDIR /miselio

COPY package*.json package-lock.json ./
COPY . . 

RUN npm install

COPY miselio/frontend ./miselio/frontend

WORKDIR /miselio/frontend
RUN npm run build

# Etapa de producción
FROM node:18-alpine
WORKDIR /miselio/frontend/coin

COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./
COPY --from=builder /miselio/apps/backend/package.json ./
RUN npm install --only=production

EXPOSE 1980

CMD ["node", "dist/main"]
