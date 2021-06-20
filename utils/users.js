const bcrypt = require('bcrypt');
const Users = require('../fixtures/users');

const allUsers = Users.getUsers();
    
exports.findOneByEmail = (userEmail) => {
    return allUsers.find(user => user.email === userEmail);
}

exports.findOneById = (userId) => {
    return allUsers.find(user => user.id === userId);
}

exports.correctPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password)
}

exports.cryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

exports.serializeUserData = (user) => {
    const { id, firstName, lastName, email, mobile } = user;
    return {
        id,
        firstName,
        lastName,
        email,
        mobile
    }
}