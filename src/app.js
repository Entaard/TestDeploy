const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();
const path = require('path');
app.listen(port);
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});
console.log("Listening at http://localhost:" + port);
