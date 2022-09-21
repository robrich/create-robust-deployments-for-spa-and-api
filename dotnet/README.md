Containerized Deployments for your SPA and API
==============================================

This demonstrates various approaches to building a SPA application and supporting backend APIs in Docker. It is the companion code to the [Containerized Deployments for your SPA and API](https://robrich.org/slides/create-robust-deployments-for-spa-and-api/#/) presentation.

Vue and ASP.NET were used here purely for demonstration.  The same principles apply to Angular or React, Java or Python, or any technology with a single page app and a supporting back-end.


Setup
-----

- 0-CLIs - Step 0 is to scaffold out each project:

  ```
  dotnet new webapi --name WebApi
  vue create vueapp
  ```

- 0-Dockerfiles-for-each - We start by cloning the first folder, then we add Dockerfiles for each piece. These are a bit advanced in that they use multi-stage builds and cache libraries before pulling in code to speed rebuilds. Here's where most tutorials stop.


Approaches
----------

In each folder, we demonstrate one approach:

- 1-container-1-domain - Deploy both SPA and back-end into a single container, using the back-end to host the front-end's static files.

- 2-containers-2-domains - For example, we may deploy our website on https://www.example.com/ and our api on https://api.example.com/.

- 2-containers-1-domain - We put both front-end and back-end into separate containers, but stitch them together into a single URL via a Kubernetes Ingress controller.

- server-rendered-spa - Visual Studio's New Project template hosts both pieces together and includes server-side processing for SPA pages.
