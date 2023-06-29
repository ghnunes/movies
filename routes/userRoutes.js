const { Router } = require("express")

const UserController = require("../controllers/userController");

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.get("/:id", userController.show);

module.exports = userRoutes;