FROM node:15.14.0-alpine3.13

WORKDIR /var/www/

ADD ./index.js ./package.json ./package-lock.json /var/www/

RUN npm ci

CMD ["node", "index.js"]
