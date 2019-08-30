FROM node:12-alpine

#RUN apk add --update make
#RUN apk add --update g++
#RUN apk add --update nodejs
#RUN apk add --update nodejs-npm
#RUN apk add --update screen
#RUN apk add --update git
RUN apk add --update bash
#RUN apk add --update curl
#RUN apk add --update python2
#RUN npm install -g n
#RUN n stable
#RUN n <version>
#RUN npm install -g nvm
#RUN nvm install <version>
#RUN nvm --lts
WORKDIR /usr/src/app
ONBUILD COPY . /usr/src/app
