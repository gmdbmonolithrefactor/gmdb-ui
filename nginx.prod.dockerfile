##### Stage 1 - Build code
FROM node:latest as node
LABEL author=galvanize
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
# Extera -- escapes the --prod flag
RUN npm run build -- --prod

##### Stage 2 - Runtime Image
FROM nginx:alpine
# Optional - this is the default
VOLUME /var/cache/nginx
#    Copy from stage 1   to Folder nginx is looking for
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t gmdb/ui -f nginx.prod.dockerfile .
# docker run -d -p 8080:80 --name gmdb-ui gmdb/ui
