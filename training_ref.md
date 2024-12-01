# Break Timing

- Tea : 11:00AM (15 minutes)
- Lunch : 1:00PM (45 minutes)
- Tea : 3:30PM (15 minutes)

# JavaScript

- Scripting Language
- Runs on browser as well as Server
- Asynchronous Programming
- Non blocking
- Single Threaded
- Event Driven
- Light-weight
- compiled as well as interpreted

# Async Task

- XHR Calls
- Socket
- Reading / Writing
- Timers

# NodeJS Installer

- Node Runtime Environment (REPL)
- Node Package Manager (NPM)
- Node Native Modules

# JavaScript Engine

- SpiderMonkey : Safari / Opera
- V8 : Chrome / Node
- Chakra : Edge

- Sync Tasks : Single Thread (T1)
- Async Tasks : T1 -> C++ Thread Pool

# Module System in NodeJS

- CommonJS : (default)

  > module.exports keyword for exporting the functionality
  > require() keyword for import the functionality

- ECMA Script Module (ESM)

  > export keyword to export
  > import statement to import

# Sementic Versioning

- npm update

Version => X.Y.Z

1.0.0 -> 1.0.1
1.0.0 -> 1.1.0
1.0.0 -> 2.0.0

Z : Patch Version -> bug fixes, updates
Y : Minor -> backward compatible functionality
X : Major -> NOT backward compatible functionality

~ : Wanted 16.0.3
^ : Maximum Minor version (16.2.0)

# Publishing NPM Projects

- npm adduser : Create account (npmjs.com) before running this command
- npm publish : publish project on npm registry

> npm config get registry

# Express Basic Project

- npm init -y
- npm install express
- write server creation code in server.js file
- npm install nodemon -D

# Todo App - REST Endpoint

- GET : /api/todos -> all todos
- GET : /api/todos/:id -> single todo
- POST : /api/todos + Request Body -> create new todo
- DELETE : /api/todos/:todoId -> delete single item
- PATCH : /api/todos/:todoId + Request Body -> Update the existing item

# run below command to make node_modules folder available

> npm install

Express
MongoDB
Integration of Mongo with Express (Mongoose)
Socket Programming
JWT security

View Engine

# MongoDB

- Mongo Deamon : Mongo Server
- Mongo Shell : Mongo Shell for client (CLI)
- Mongo Compass : GUI Client for Mongo

- Mongo Atlas : Cloud version of MongoDB

# MongoDB Commands

- use synechron-db
- db.employees.insertOne({name: "monica geller", salary: 10000})
- db.employees.deleteOne({ame: "monica geller"})
- db.employees.updateOne({ame: "monica geller"})
- db.employees.find()

# MongoAtlas Credentials

- username : thetestuser
- password : zIgYdYq24SJyI5yf

- Mongo SRV:
  mongodb+srv://thetestuser:zIgYdYq24SJyI5yf@theatlascluster.e9xsq.mongodb.net/?retryWrites=true&w=majority&appName=TheAtlasCluster

# Mongoose

1. Connect with MongoDB (Atlas)
2. Create Schema
3. Create Model
4. DB CRUD Operation using Model

# JSON web Token

- npm install jsonwebtoken
  : sign() - generates token
  : verify() - decode token

# JWT Auth App

- GET /api/public : accessed by everyone
- POST /api/login : username and password (matches with username ="john@test" and password="john123")
- GET /api/protected : accessed by only authenticated user

# Socket Programming

- npm install socket.io
