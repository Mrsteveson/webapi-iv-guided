const server = require('./api/server.js');
// making the port dynamic for heroku hosting
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
