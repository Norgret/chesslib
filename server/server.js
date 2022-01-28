/*

Code for chesslib API

*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const crypto = require('./crypto.js');
const database = require('./database.js');
const login = require('./login.js');

const app = express();
const PORT = 3000;
const frontendPath = "http://localhost:8080";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//
//	routes
//

// login form
app.post('/login', (req, res) => {
	console.log(req.body);

	login.validateCredentials(req.body.username, req.body.password,

		(user) => {	// success
			res.set({ 'Set-Cookie': `sessID=<sessionID>; Secure` });
			// save sessID in users.json later
			res.status(200);
			res.json(user);
		},

		() => {	// failure
			res.status(401);
			res.send("invalid credentials");
		}

	);
});


// signup form
app.post('/signup', (req, res) => {
	const username = req.body.username;
	const password = req.body.username;

	database.pushNewUser({
		username: username,
		password: crypto.sha256hash(password)
	})
	.then(status => {
		console.log(status);
		if (status === "ok") {
			res.set({ 'Set-Cookie': `sessID=<sessionID>; Secure` });
			// save sessID in users.json later
			res.sendStatus(200);
		}
		else {	// user exists
			res.status(401);
			res.send("user already exists");
		}
	});

});


app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});