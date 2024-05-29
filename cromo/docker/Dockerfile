FROM node:16-alpine3.17
WORKDIR /app
COPY ../package.json package-lock.json ./
RUN npm install
COPY ../. .
RUN npm run build

FROM nginx:stable-alpine as prod
COPY --from=build /app/public /usr/share/nginx/html
COPY --from=build /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
