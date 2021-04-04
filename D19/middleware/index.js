const { verify } = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    try {
      let token = req.headers.token;
      if (!token) {
        return res.status(401).json({
          message: "No token present, access denied",
        });
      }
      const verified = verify(token, process.env.JWT_SECRET);
      if (!verified) {
        return res.status(401).json({
          message: "Auth denied, tampered token",
        });
      }

      req.body.user = verified.userId;

      next();
    } catch (err) {
      if (err.name == "JsonWebTokenError") {
        return res.status(401).json({
          message: "Auth denied, tampered token",
        });
      }
      return res.status(500).json({
        message: "Some error occured",
      });
    }
  },
};
