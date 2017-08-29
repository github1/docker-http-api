FROM node:latest

WORKDIR /opt/app

ADD . /opt/app

RUN npm install --unsafe-perm

EXPOSE 9999

CMD ["node", "server.js"]
