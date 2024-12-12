FROM node:20-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=3000 
RUN npm run build --if-present
RUN npm prune --omit=dev

CMD ["npm", "run", "start"]