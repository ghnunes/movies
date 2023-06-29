const { Router } = require("express")

const userRouter = require("./userRoutes");
const movieRouter = require("./movieRoutes");
const movieTagRouter = require("./movieTags");

const routes = Router();

routes.use("/user/", userRouter);
routes.use("/movie/",movieRouter);
routes.use("/movieTags/",movieTagRouter);

module.exports = routes;