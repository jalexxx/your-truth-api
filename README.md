## Table of Contents
[Introduction to our api](#your-truth-api)  
[Installation](#Installation)  
[Usage](#Usage)  
[API](#api)  
 
# your-truth-api

Inspired by [Telegraph](https://telegra.ph/), this app allows users to write down their thoughts whilst remaining anonymous. It allows you to reflect on those thoughts as your mind speaks the truth. Reflect. And act upon that reflection as you please. 

( Be wise ). 

Posts are stored in a MongoDB database and can be accessed through an API. This app was created by [@bojin11](https://github.com/bojin11) and [@jalexxx](https://github.com/jalexxx/) as part of Futureproof's Coding Challenge.

### Installation

- Clone or download this repo
- `npm install`
-  `npm install -g nodemon`
-  `npm init` + ` npm install express`
-  
### Usage

- Open your terminal/CLI and navigate to the `your-truth-api` folder
- Ensure docker desktop app is running
- Run `docker-compose up` to start the API and DB services
  - Access: client on localhost:8080/ and server on localhost:3000/
- Run `docker-compose down` to stop the services and keep data

## Technologies

- HTML, CSS and JavaScript
  - Dependencies include: `express` , `cors` , `nodemon` , `mongoDB`, `watchify`, `concurrently`
- Test suite: `Jest` , `Supertest`

## API
| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /posts/         	| GET       	| index  
| /posts/:id        | GET       	| show   
| /posts          	| POST      	| create  

# Bugs

- The tests are WIP 

# Could have

- UPDATE route
- DELETE route
-  Can consider mutiple post that compile upon one another at the side of the page
-  There will still be an empty pos which you can repeadtly fill through and publish
-  More dynamic colour designs - light mode / dark mode ( not the generic white/black one but two other contrasting colours such as orange and blue etc)
-  Change the error routes for the routes
-  Have a welcome page that leads to the post page

# Wins & Challenges

- [WIN] : Able to get our API to work
- [WIN] : The routes work pretty well
- [CHALLENGE] : Being able to get the test to work
- [CHALLENGE] : Chosing what error status each route should have 

