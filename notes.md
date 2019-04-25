adds nodemon as a dev dependency
**yarn add nodemon --dev**

adjust scripts
1. test to server.
2. add a start script
**"server": "nodemon index.js"**
(Heroku wants the start command)
**"start": "node index.js"**


screaming_snake_case for .env files
.env changes are **not reflected until you restart the server**.
nodemon wont do it for me.

Environments:

-development
-staging/testing
-production