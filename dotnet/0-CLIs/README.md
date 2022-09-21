Create the Apps
===============

The first step is to create the apps using each product's CLI:

1. Download .NET SDK from https://dotnet.microsoft.com/download/dotnet-core

2. Scaffold the .NET project:

   `dotnet new webapi -minimal -n NetApi`

3. Install Node from https://nodejs.org/ if needed.

4. Scaffold the Vue app using the Vue cli:

   `npx @vue/cli create vueapp`

   This will walk you through a wizard allowing you to pick your favorite options.

5. To call the backend, we added `src/components/WeatherForecast.vue`, referenced it from `src/App.vue`, and created `vue.config.js` to proxy requests to the back-end.

6. In the API, we change the route from `/weatherforecast` to `/api/weatherforecast` in the `[Route]` attribute of WeatherController.cs.


Results
-------

The contents of this folder are the results of doing these steps.

We'll copy this content into each other scenario as we build `Dockerfile`s for each technique.
