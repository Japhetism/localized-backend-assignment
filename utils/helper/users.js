const Users = require('../../fixtures/users');

const allUsers = Users.getUsers();
    
exports.findOneByEmail = (userEmail) => {
    return allUsers.find(user => user.email === userEmail);
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