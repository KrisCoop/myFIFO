const bcrypt = require('bcrypt');

const saltRounds = 10

module.exports = {

    login: (req, res) => {
        const {inputEmail, inputPassword} = req.body;
        db.user_table.findOne({inputEmail})
        .then((user) => {
            if (!user){
                throw "No user with associated email";
            }
            catchUser = user;
                return bcrypt.compare(inputPassword, user.user_password);
        }).then(isMatch => {
            if (!isMatch)
            throw "incorrect password";
            delete catchUser.user_password;
            // need to add a req.session
        })
    }
}