const express = require("express");
const repoController = require("../controllers/repoController");


const repoRouter = express.Router();
repoRouter.post("/repo/create", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.get("/repo/name/:name", repoController.fetchRepositoryByName);
repoRouter.get("/repo/user/:userID", repoController.fetchRepositoriesForCurrentUser);
repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);
repoRouter.patch("/repo/toggle/:id", repoController.toggleVisibilityById);
repoRouter.delete("/repo/delete", repoController.deleteRepositoryById);

module.exports = repoRouter;