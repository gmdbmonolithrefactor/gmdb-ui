# Stage 1
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

EXPOSE 4200
CMD [ "node", "server.js" ]
