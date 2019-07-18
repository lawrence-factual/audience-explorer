FROM node:10.16.0
WORKDIR /usr/src/app
EXPOSE 3000
USER node
COPY . /usr/src/app/
CMD [ "npm", "start" ]