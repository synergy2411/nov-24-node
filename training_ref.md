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
- npm publish

npm config get registry

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
