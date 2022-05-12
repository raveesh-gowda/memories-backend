const jwt = require("jsonwebtoken");

const User = require("../models/user");

const authenticateUser = (req, res, next) => {
   const token = req.header("Authorization").split(" ")[1];
   let tokenData;

   try {
      tokenData = jwt.verify(token, "mem123");
      User.findById(tokenData._id)
         .then((user) => {
            req.user = user;
            next();
         })
         .catch((err) => {
            res.json(err.message);
         });
   } catch (err) {
      res.json(err.message);
   }
};

module.exports = { authenticateUser };
