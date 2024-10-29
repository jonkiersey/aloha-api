# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /src
COPY . .
RUN yarn set version 4.5.0
RUN yarn install
RUN yarn build
EXPOSE 8080
CMD ["node", "dist/server.js"]
