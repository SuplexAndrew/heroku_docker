FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

Copy . .

EXPOSE 3000

CMD ["node", "index.js"]
