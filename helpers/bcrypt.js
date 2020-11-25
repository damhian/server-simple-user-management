const bcrypt = require('bcrypt');
const saltRounds = 10;

async function encryptPassword (password) {
    const result = await bcrypt.hash(password, saltRounds)
    return result 
} 

function decryptPassword (password, passdb) {
    return bcrypt.compare(password, passdb).then(function(result) {
        return result
    });
}

module.exports = {
    encryptPassword,
    decryptPassword
}
