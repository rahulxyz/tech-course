const User = require('../entity/user');

module.exports = {

    save: async (data)=>{
        const user = new User(data);
        return user.save();
    },

    findByEmail: async(data)=>{
        return User.findOne({email: data})
    }

}