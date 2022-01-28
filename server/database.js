//
//	user management / database
//

const fs = require('fs');
const usersDatabasePath = './db/users.json';

const users = getUsersSync();


function getUsersSync() {
	const usersJSON = fs.readFileSync(usersDatabasePath, 'utf-8');
	return JSON.parse(usersJSON);
}


//* implement a priority que for search queries later
// query: [key, value]
async function search(query) {
	const [ key, value ] = query;

	for (const user of users) {
		if (user[key] === value) {
			return user;
		}
	}

	return null;
}

async function getUserIndex(query) {

}

// save loaded users to database
async function saveUsers() {
	const usersJSON = JSON.stringify(users);
	fs.writeFileSync(usersDatabasePath, usersJSON);
}

// push new user object and update database
async function pushNewUser(user) {
	// test if user exists
	foundUser = await search(["username", user.username]);
	if (!foundUser) {
		users.push(user);
		saveUsers();
		return "ok";
	}
	else {
		return false;
	}
}


module.exports = {
	getUsers: getUsersSync,
	search: search,
	pushNewUser: pushNewUser
}