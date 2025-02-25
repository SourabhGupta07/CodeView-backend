const express = require("express");
const userController = require("../controllers/userController");


const userRouter = express.Router();
userRouter.get("/allUsers", userController.getAllUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/userProfile/:id", userController.getUserProfile);
userRouter.put("/update/:id", userController.updateUserProfile);
userRouter.delete("/delete/:id", userController.deleteUserProfile);

module.exports = userRouter;