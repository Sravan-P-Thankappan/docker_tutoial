
FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

ARG DEFAULT_PORT=80

COPY . .

ENV PORT=$DEFAULT_PORT \
    USER=sravan

EXPOSE $PORT

CMD [ "npm","start" ]