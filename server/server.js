const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


//
//	user management / database
//

const users = {};

function getUsersSync() {
	const usersJSON = fs.readFileSync('./users.json');
	return JSON.parse(usersJSON);
}

async function


//
//	routes
//

// landing page
app.get('/', (req, res) => {
	res.send('test');
});

// signup form
app.post('/signup', (req, res) => {
	const signUpForm = req.body;

	const { password, confirmPassword, ...user } = signUpForm;
	const hash = btoa(`${user.username}${user.password}`);

	// save user data to users.json

	res.send({
		data: signUpForm,
		status: 'success'
	})
});


app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});