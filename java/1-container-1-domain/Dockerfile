# build Vue app:
FROM node:alpine as buildvue

WORKDIR /src

COPY vueapp/package.json .
RUN npm install

COPY vueapp .
RUN npm run build


# build Java app:
FROM openjdk:17-jdk-alpine as build

WORKDIR /src

COPY springbootapi/.mvn .mvn
COPY ["springbootapi/pom.xml", "springbootapi/mvnw", "springbootapi/mvnw.cmd", "./"]
RUN ./mvnw dependency:go-offline

COPY springbootapi/. .
# copy vue content into Spring Boot's static files folder:
COPY --from=buildvue /src/dist src/main/resources/static/.

RUN ./mvnw package


# Copy results into production container:
FROM openjdk:17-alpine

WORKDIR /app
COPY --from=build /src/target/demo-0.0.1.jar .

CMD ["java", "-jar", "demo-0.0.1.jar"]
