FROM node:lts-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY calculator.js .
COPY calculator.test.js .

RUN npm install

ENTRYPOINT ["npx", "jest"]
CMD []
