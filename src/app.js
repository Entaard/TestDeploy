const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();
const path = require('path');
express = require('express');

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack')
	const webpackDevMiddleware = require('webpack-dev-middleware')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const config = require('../webpack.dev.config.js')
	const compiler = webpack(config)

	app.use(webpackHotMiddleware(compiler))
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}))
}

app.listen(port);
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});
app.use(express.static(__dirname + '/../public'));

console.log(`Listening at http://localhost:${port}`)
