import { UserController } from "../controller/usersController"
import express from 'express'

export const usersRouter = express.Router()
const usersController = new UserController()

usersRouter.get("/getAllUsers", usersController.getAllUsers)
usersRouter.get("/getUser/:userID", usersController.getUsers)
usersRouter.post("/create",usersController.addUsers)
usersRouter.patch("/update/:userID", usersController.updateUsers)
usersRouter.patch("/update/role/userID/:userID/adminID/:adminID", usersController.updateUsersRole)
usersRouter.delete("/delete/userID/:userID", usersController.deleteUsers)
usersRouter.post("/login", usersController.login)