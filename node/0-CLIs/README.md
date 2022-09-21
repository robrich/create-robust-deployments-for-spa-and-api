Create the Apps
===============

The first step is to create the apps using each product's CLI:

1. Install Node from https://nodejs.org/ if needed.

2. Scaffold the Express.js project:

   `npx express-generator --no-view .`

3. Scaffold the Vue app using the Vue cli:

   `npx @vue/cli create vueapp`

   This will walk you through a wizard allowing you to pick your favorite options.

4. To call the backend, we added `src/components/WeatherForecast.vue`, referenced it from `src/App.vue`, and created `vue.config.js` to proxy requests to the back-end.

5. In the API, we add the `routes/weatherforecast.js` to the project. These generate random temperature readings.


Results
-------

The contents of this folder are the results of doing these steps.

We'll copy this content into each other scenario as we build `Dockerfile`s for each technique.
