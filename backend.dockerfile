FROM node:lts-alpine

WORKDIR /backend

COPY ./backend/package.json ./backend/yarn.lock ./

RUN yarn install

COPY ./common ../common

COPY ./backend .

EXPOSE 3000

CMD ["yarn", "dev"]