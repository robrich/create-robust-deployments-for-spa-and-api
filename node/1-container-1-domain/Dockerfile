# build Express app:
FROM node:alpine as buildexpress

WORKDIR /src

COPY express/package.json .
RUN npm install

COPY express/. .
# RUN npm test
RUN npm prune --production


# build Vue app:
FROM node:alpine as buildvue

WORKDIR /src

COPY vueapp/package.json .
RUN npm install

COPY vueapp .
RUN npm run build


# Copy results from both places into production container:
FROM node:alpine

WORKDIR /app
COPY --from=buildexpress /src .
COPY --from=buildvue /src/dist ./public

ENV NODE_ENV production
ENV PORT 5000
EXPOSE 5000

CMD ["npm", "start"]
