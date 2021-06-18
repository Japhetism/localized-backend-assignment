const Users = require('../fixtures/users');

const allUsers = Users.getUsers();
    
exports.findOneByEmail = (userEmail) => {
    return allUsers.find(user => user.email === userEmail);
}

exports.findOneById = (userId) => {
    return allUsers.find(user => user.id === userId);
}

exports.correctPassword = (user, password) => {
    return user.password === password;
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