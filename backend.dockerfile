FROM node:lts-alpine

RUN mkdir -p /common
RUN mkdir -p /backend

COPY ./package.json ./yarn.lock ./
COPY ./common/package.json ./common
COPY ./backend/package.json ./backend

RUN yarn install

COPY ./common ./common
COPY ./backend ./backend

WORKDIR /backend

EXPOSE 3000

CMD ["yarn", "dev"]