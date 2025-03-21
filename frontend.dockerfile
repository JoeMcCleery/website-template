FROM node:lts-alpine

RUN mkdir -p /common
RUN mkdir -p /frontend

COPY ./package.json ./yarn.lock ./
COPY ./common/package.json ./common
COPY ./frontend/package.json ./frontend

RUN yarn install

COPY ./common ./common
COPY ./frontend ./frontend

WORKDIR /frontend

# Make sure post install script is run
RUN yarn postinstall

EXPOSE 3000

CMD ["yarn", "dev"]