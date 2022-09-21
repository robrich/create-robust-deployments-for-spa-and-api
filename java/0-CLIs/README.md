Create the Apps
===============

The first step is to scaffold each app.

1. Head to https://start.spring.io/, add Spring Web dependency, and select other options to taste. In this demo, we chose all the defaults.

2. Click Generate to download the Spring Boot app, then unzip it.

3. Install Node from https://nodejs.org/ if needed.

4. Scaffold the Vue app using the Vue cli:

   `npx @vue/cli create vueapp`

   This will walk you through a wizard allowing you to pick your favorite options.

5. To call the backend, we added `src/components/WeatherForecast.vue`, referenced it from `src/App.vue`, and created `vue.config.js` to proxy requests to the back-end.

6. In the API, we add the `WeatherForecast.java` object and the `WeatherForecastController.java` controller to the project. These generate random temperature readings.


Results
-------

The contents of this folder are the results of doing these steps.

We'll copy this content into each other scenario as we build `Dockerfile`s for each technique.
