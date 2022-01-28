const database = require('./database.js');
const crypto = require('./crypto.js');

async function validateCredentials(username, password, success, failure) {
	database.search(["username", username]).then(user => {

		if (user) {
			const passwordHash = crypto.sha256hash(password);

			// valid credentials
			if (user.password === passwordHash) {
				success(user);
			}

			// invalid credentials
			else {
				failure(user);
			}
		}
		// user not found
		else {
			failure(null);
		}
	});
}

module.exports = {
	validateCredentials: validateCredentials
}