const crypto = require('crypto');

function sha256hash(plaintext) {
	const hash = crypto.createHash('sha256');
	hash.update(plaintext);
	return hash.digest('hex');
}

module.exports = {
	sha256hash: sha256hash
}