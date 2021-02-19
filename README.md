# MEAN Urls

This project is example code for following [this blog post](https://www.jeremywells.io/2021/02/04/mean-docker).

To run this application, you'll need the following installed:
 - [Docker Desktop](https://www.docker.com/products/docker-desktop)
 - [Node](https://nodejs.org)
 - [The Typescript CLI](https://www.npmjs.com/package/typescript)

A few helpful npm commands are added to help build and run the application:
 - `$ npm run start` - Start the Angular client server
 - `$ npm run cp:www` - Copy any non-Typescript files to the output directory
 - `$ npm run build:api` - Transpile all of the Typescript code for the API server
 - `$ npm run start:api` - Run the Express API server
 - `$ npm run mongo` - Run a Docker container with a MongoDB server configured to connect to the API
 - `$ npm run mongo:down` - Stop and remove the MongoDB container
 - `$ npm run mongo:clean` - Remove any data persisted by the MongoDB container
 - `$ npm run clean` - Remove any build artifacts (deletes everything in the `./dist` directory)
