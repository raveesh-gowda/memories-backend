const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../app/middleware/authenticate");
const userControllers = require("../app/controllers/userControllers");
const postControllers = require("../app/controllers/postControllers");

//user authentication
router.post("/api/user/register", userControllers.register);
router.post("/api/user/login", userControllers.login);
router.get("/api/user/account", authenticateUser, userControllers.account);

//posts
router.get("/api/posts",authenticateUser, postControllers.list);
router.post("/api/posts",authenticateUser, postControllers.create);
router.get("/api/posts/:id",authenticateUser, postControllers.show);
router.put("/api/posts/:id",authenticateUser, postControllers.update);
router.delete("/api/posts/:id",authenticateUser, postControllers.destroy);

module.exports = router;
