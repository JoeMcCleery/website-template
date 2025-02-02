FROM node:lts-alpine

WORKDIR /frontend

COPY ./frontend/package.json ./frontend/yarn.lock ./

RUN yarn install

COPY ./common ../common

COPY ./frontend .

# Make sure post install script is run
RUN yarn postinstall

EXPOSE 3000

CMD ["yarn", "dev"]