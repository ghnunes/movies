const { Router } = require("express")

const MovieTagsController = require("../controllers/movieTagsControllers");

const movieTagRoutes = Router();

const movieTagController = new MovieTagsController();

movieTagRoutes.post("/", movieTagController.create);
movieTagRoutes.get("/:id", movieTagController.show);

module.exports = movieTagRoutes;