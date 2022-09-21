# build "server" image
FROM openjdk:17-jdk-alpine as build

WORKDIR /src

COPY .mvn .mvn
COPY ["pom.xml", "mvnw", "mvnw.cmd", "./"]
RUN ./mvnw dependency:go-offline

COPY . .
RUN ./mvnw package


# production runtime "server" image
FROM openjdk:17-alpine

WORKDIR /app
COPY --from=build /src/target/demo-0.0.1.jar .

CMD ["java", "-jar", "demo-0.0.1.jar"]
