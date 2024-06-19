FROM node

WORKDIR /usr/src/app

RUN apt update
RUN apt upgrade -y
