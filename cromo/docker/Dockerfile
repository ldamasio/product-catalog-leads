FROM node:alpine
WORKDIR /app
COPY ../package*.json ./
RUN npm install --production
COPY ../. .
RUN npm run build
EXPOSE 3000

RUN npm install --global pm2
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]

FROM nginx:stable-alpine as prod
# COPY ../public /usr/share/nginx/html
COPY ../docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

