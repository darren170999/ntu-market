const User = require('../models/User');

const handleFindUser = async (req, res) => {
    const { parameter, property } = req.body;

    switch (property) {
        case 'name':
            await User.find({ name: parameter })
            .then(users => res.json(users))
            .catch(console.log);
            break;
        default:
            res.status(400).json("Property is invalid");
            break;
    }
}

module.exports = {handleFindUser}