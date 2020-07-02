# builder
FROM node:10-alpine as builder
COPY package.json ./
COPY yarn.lock ./
RUN npm install && mkdir /moneymon-ui && mv ./node_modules ./moneymon-ui
WORKDIR /moneymon-ui
COPY . .
RUN npm run build

# production
FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /moneymon-ui/build /usr/share/nginx/html

EXPOSE 3001 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]