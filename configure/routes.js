const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../app/middleware/authenticate");
const userControllers = require("../app/controllers/userControllers");
const postControllers = require("../app/controllers/postControllers")

//user authentication
router.post("/api/user/register", userControllers.register);
router.post("/api/user/login", userControllers.login);
router.get("/api/user/account", authenticateUser, userControllers.account);

//posts
router.get("/api/posts", postControllers.list)
router.post("/api/posts", postControllers.create)
router.get("/api/posts/:id", postControllers.show)
router.put("/api/posts/:id", postControllers.update)
router.delete("/api/posts/:id", postControllers.destroy)

module.exports = router;
