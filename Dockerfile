FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY scripts ./scripts
ENV PORT=3000
ENV SERVICE_NAME=sa4-lab4-health
EXPOSE 3000
CMD ["node", "src/server.mjs"]
