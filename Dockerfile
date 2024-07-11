FROM alpine:3.12 as deps

WORKDIR /deps

RUN apk add --no-cache nodejs npm
COPY ./package.json ./package-lock.json ./

RUN npm install

FROM alpine:3.12 as builder

WORKDIR /app

COPY --from=deps /deps/node_modules ./node_modules
COPY . .

RUN npm test
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]