# your-truth-api

Inspired by [Telegraph](https://telegra.ph/), this app allows users to write down their thoughts whilst remaining anonymous.

Posts are stored in a MongoDB database and can be accessed through an API. This app was created by [@bojin11](https://github.com/bojin11) and [@jalexxx](https://github.com/jalexxx/) as part of Futureproof's Coding Challenge.

### Installation

- Clone or download this repo

### Usage

- Open your terminal/CLI and navigate to the `your-truth-api` folder
- Ensure docker desktop app is running
- Run `docker-compose up` to start the API and DB services
  - Access: client on localhost:8080/ and server on localhost:3000/
- Run `docker-compose down` to stop the services and keep data

## Technologies

- HTML, CSS and JavaScript
  - Dependencies include: express, cors, nodemon, mongoDB, watchify, concurrently
- Test suite: Jest

## API
| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /posts/         	| GET       	| index  
| /posts/:id        | GET       	| show   
| /posts          	| POST      	| create   
