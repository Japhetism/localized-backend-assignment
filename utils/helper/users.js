const Users = require('../../fixtures/users');

const allUsers = Users.getUsers();

exports.findOneByEmail = (userEmail) => {
    return allUsers.find(user => user.email === userEmail);
}

exports.correctPassword = (user, password) => {
    return user.password === password;
}