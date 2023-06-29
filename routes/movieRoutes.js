const { Router } = require("express")

const MovieController = require("../controllers/movieControllers");

const movieRoutes = Router();

const movieController = new MovieController();

movieRoutes.post("/", movieController.create);
movieRoutes.get("/:id", movieController.show);

module.exports = movieRoutes;