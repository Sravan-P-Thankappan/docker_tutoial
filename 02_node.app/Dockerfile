
FROM node

WORKDIR /app

COPY pacage.json /app

RUN npm install

COPY . /app

EXPOSE 7000

CMD [ "node","server.js" ]