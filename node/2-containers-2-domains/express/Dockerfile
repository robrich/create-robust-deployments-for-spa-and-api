FROM node:alpine as build

WORKDIR /src

COPY package.json .
RUN npm install

COPY . .
# RUN npm test
RUN npm prune --production


FROM node:alpine

WORKDIR /app
COPY --from=build /src .

# does not contain the trailing slash
ENV CORS_DOMAIN http://localhost:3000

ENV NODE_ENV production
ENV PORT 5000
EXPOSE 5000

CMD ["npm", "start"]
