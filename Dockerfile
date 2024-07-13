FROM node:22-alpine as deps

WORKDIR /deps

COPY ./package.json ./package-lock.json ./
RUN npm install

FROM node:22-alpine as builder

WORKDIR /app

COPY --from=deps /deps/node_modules ./node_modules
COPY . .

RUN npm test
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]