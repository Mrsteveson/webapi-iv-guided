adds nodemon as a dev dependency
**yarn add nodemon --dev**

adjust scripts
1. test to server.
2. add a start script
**"server": "nodemon index.js"**
(Heroku wants the start command)
**"start": "node index.js"**

