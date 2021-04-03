const { genSalt, hash, compare } = require("bcryptjs");
const { save, findByEmail } = require("../dao/user");
const _ = require("lodash");
const { sign } = require("jsonwebtoken");
const { endsWith } = require("lodash");
const privateKey = "dawdawdwd2323232qr33rqrqdqad3d33d3";

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (_.isEmpty(name) || _.isEmpty(email) || _.isEmpty(password)) {
        return res.status(400).json({
          message: "Not all fields is present",
        });
      }

      if (password.length < 5) {
        return res.status(400).json({
          message: "Password too short",
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

  loginUser: async (req, res) => {
    try {
      let { email, password } = req.body;

      if (_.isEmpty(email) || _.isEmpty(password)) {
        return res.status(400).json({
          message: "Incomplete info",
        });
      }

      if (password.length < 5) {
        return res.status(400).json({
          message: "Password too short",
        });
      }

      const isUserPresent = await findByEmail(email);

      if (_.isEmpty(isUserPresent)) {
        return res.status(400).json({
          message: "User not present",
        });
      }

   
      const isMatch = await compare(password, isUserPresent.hashedPassword);

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid creds",
        });
      }

      let userId = isUserPresent._id;

      const token = await sign({userId}, privateKey);
      return res.status(200).json({
        token,
        email,
        name: isUserPresent.name,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        "message":"Some error occured"
      })
    }
  },
};
