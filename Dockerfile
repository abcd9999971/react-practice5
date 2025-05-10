FROM node:22.14.0-alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

COPY . .

RUN npm install