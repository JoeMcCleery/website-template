FROM node:lts-alpine

WORKDIR /app

COPY ./backend/package.json ./backend/yarn.lock ./

RUN yarn install

COPY ./common ../common

COPY ./backend .

EXPOSE 3000

CMD ["yarn", "dev"]