const { genSalt, hash } = require("bcryptjs");
const { save, findByEmail } = require("../dao/user");
const _ = require("lodash");
module.exports = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (_.isEmpty(name) || _.isEmpty(email) || _.isEmpty(password)) {
        return res.status(400).json({
          message: "Not all fields is present",
        });
      }

      const existingUser = await findByEmail(email);
      if (!_.isEmpty(existingUser)) {
        return res.status(400).json({
          message: "Account already present",
        });
      }

      const salt = await genSalt();
      const hashedPassword = await hash(password, salt);

      const newuser = {
        email,
        hashedPassword,
        name,
      };

      const savedData = await save(newuser);

      res.status(200).json(savedData);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Some error occured",
      });
    }
  },
};
