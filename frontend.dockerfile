FROM node:lts-alpine

WORKDIR /app

COPY ./frontend/package.json ./frontend/yarn.lock ./

RUN yarn install

COPY ./common ../common

COPY ./frontend .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]