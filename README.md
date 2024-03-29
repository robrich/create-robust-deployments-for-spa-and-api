Containerized Deployments for your SPA and API
==============================================

This demonstrates various approaches to building a SPA application and supporting backend APIs in Docker. It is the companion code to the [Containerized Deployments for your SPA and API](https://robrich.org/slides/create-robust-deployments-for-spa-and-api/#/) presentation.


Approaches
----------

In each folder, we demonstrate one approach:

- 1-container-1-domain - Deploy both SPA and back-end into a single container, using the back-end to host the front-end's static files.

- 2-containers-2-domains - We put our website on https://www.example.com/ and our api on https://api.example.com/.

- 2-containers-1-domain - We put both front-end and back-end into separate containers, but stitch them together into a single URL via a Kubernetes Ingress controller.


License
-------

License: MIT, Copyright Richardson & Sons, LLC.
