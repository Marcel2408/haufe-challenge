# Haufe-challenge - Marcel Subirana

Dear Haufe team,

welcome to my version of the Rick & Morty application!

The project needs some steps to run properly as described below:

## Get started

Clone the repo:

```bash
$ git clone https://github.com/Marcel2408/haufe-challenge
$ cd haufe-challenge
```

Since this project uses MongoDB as local database, you will need to stablish connection with it.

Open another terminal and install the required dependencies both in the client and the server:

Install dependencies:

```bash
$ cd client
$ npm install
$ cd ../server
$ npm install
```

Create a ```.env```  in the server folder of this repo.
```bash
$ touch .env
```

Fill the file with the following info:

```
PORT=<define the port for the server to listen to>
DATABASE=mongodb://localhost:27017/<name your DB>
JWT_SECRET=<create a secret string (make sure it has at least 32 characters)>
JWT_EXPIRES_IN=<decide the time of expiration of your JWT tokens>
JWT_COOKIE_EXPIRES_IN=<decide the time of expiration of your JWT cookie>
```

## Run the app

Start the client:

```bash
$ cd client
$ npm start
```

Being a CRA, by default it will run on localhost:3000

Start the server:

```bash
$ cd server
$ npm start
```

You can alternatively run the following command to run the server using Nodemon
```bash
$ npm run start:dev
```
## Notes

### Client

Stack: React with Hooks and Redux as specified, together with Sass as a CSS preprocessor.

For linting I use ESLint with the Airbnb setup, leaving the formatting for Prettier.

Relevant dependencies:

Use [axios](https://www.npmjs.com/package/axios) as Http request package as it works both for the frontend and for the backend.

Use [redux-thunk](https://www.npmjs.com/package/redux-thunk) as a middleware to dispatch async actions.
Use [redux-logger](https://www.npmjs.com/package/redux-logger) as a middleware to keep track of state changes during development.

Use [commitizen](https://www.npmjs.com/package/commitizen) to keep clean an well structured commits.

I decided to create a HOC 'requireAuth' to make sure that only the logged users are able to acess the list of characters.

### Server
Stack: NodeJS with ExpressJS as framework.

I divide the routes in 3 controllers (auth, user, character) to separate concerns.
The API endpoints contain a reference to the version (/v1/), like that newer versions can be build in /v2+/ while always keeping the previous reliable version available.

Relevant dependencies:

[bcryptjs](https://www.npmjs.com/package/bcryptjs) to ensure a safe crypting of the user passwords.
[cookie-parser](https://www.npmjs.com/package/cookie-parser) to be able to read cookies send in the request from the client.
[express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize) to prevent possible attacks by query injection in MongoDB
[helmet](https://www.npmjs.com/package/helmet) also to improve security by adding extra http headers to the calls.
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) to authenticate and authorize users.
[mongoose](https://www.npmjs.com/package/mongoose) ORM that works best with MongoDB.
[validator](https://www.npmjs.com/package/validator) to add another layer of validation to email format in the User Schema.

Extras: I managed to complete the signup functionality and added a spinner

## Potential Improvements (next steps)
Responsivess: I focused on meeting the requirements, but some media queries would be needed to fit in all screen sizes. However, I used 'rem' to quickly adapt most of the properties by just changing the root font-size.

Sass: More leverage on the Sass features can be developed, such as mixins for quickly adding the basic structure when declaring an element as flex container.

Router: A router index.js file can be added to gather all routes and map them depending on the controller that bothers in each case.

Production environment: NODE_ENV variables can be added to create different environments for production, testing and development.

API file: In the frontend, a refactor to isolate the API calls would be better to avoid code repetition and separate concerns.

Authentication: I use JWT tokens stored in local storage, and I've set up the server to send a cookie with the jwt token. However, since client and server operate in different servers I've gone on with tokens and authorization headers. Setting up a proxy and authenticating via cookie is more secure against cross domain attacks.

Performance: Using React.lazy to wrap the different routes and divide into chunks the bundle js file in a way that only when the user clicks the code is loaded. 

## About me

Thank you for the opportunity and I really hope you like it!

- Marcel Subirana - [Github](https://github.com/marcel2408) - [LinkedIn](https://www.linkedin.com/in/marcel-subirana-campanera/)