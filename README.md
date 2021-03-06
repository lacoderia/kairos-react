# kairos-react

This web app allows user to have access to their progress inside the company.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This repository contains a react app.

### Installing

1. Clone this repository
2. Install node dependencies as user
```
npm install
```

## Running

1. Configure environment file
.env
```
API_ROOT=
OMEIN_STORE_URL=
PRANA_STORE_URL=
```
2. Run the development build script on cli
```
npm run build:dev
```
3. Open `http://localhost:9001/` on a browser

## Build for testing

Steps to create a build for deploying the app on a testing environment:

1. Configure environment file
.env
```
API_ROOT=
OMEIN_STORE_URL=
PRANA_STORE_URL=
```
2. Run the testing build script on cli
```
npm run build:test
```
3. Create a bundle with the following structure and upload it to the deployment server
```
|-- kairos-react
    |-- css
        |-- index.css
        |-- index.<hash>.css 
    |-- images
    |-- index.html
    |-- js
        |-- index.<hash>.js
```

## Deployment as single app

Steps to create a build for deploying the app on a production environment:

1. Configure environment file
.env
```
API_ROOT=
OMEIN_STORE_URL=
PRANA_STORE_URL=
```
2. Run the production build script on cli
```
npm run build:prod
```
3. Create a bundle with the following structure and upload it to the deployment server
```
|-- kairos-react
    |-- css
        |-- index.css
        |-- index.<hash>.css 
    |-- images
    |-- index.html
    |-- js
        |-- index.<hash>.js
```

## Deployment as composite app

1. Build each app separately
```
npm run build:prod
```
2. Create a bundle with with the following structure and upload it to the deployment server
```
|-- kairos
    |-- css
        |-- index.css
        |-- index.<hash>.css 
        |-- store.<hash>.css
    |-- docs
    |-- images
    |-- index.html
    |-- js
        |-- index.<hash>.js 
        |-- store.<hash>.js
    |-- store.html
```

## Use magic to test or deploy the app

1. Run `buildkairos test`or `buildkairos prod`
2. Upload generated folder to test/deployment server
