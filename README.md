Day 1

npm init -y
👉 මේකෙන් package.json file එක create වෙනවා — මේකේම dependecies list වෙනවා.


npm install express mongoose cors dotenv


➡️ express → API routes handle කරන්න
➡️ mongoose → MongoDB connect & models handle කරන්න
➡️ cors → frontend/backend connect කරන්න
➡️ dotenv → environment variables store කරන්න

npm install express

npm install nodemon

npm install body-parser

npm install

{
  "name": "day1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^2.2.0",
    "express": "^5.1.0",
    "nodemon": "^3.1.10"
  }
}

npm start