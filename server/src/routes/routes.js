import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  router.get("/", homeController.home);
  router.get("/register", homeController.register);
  router.post("/user/create-user", homeController.createNewUser);
  router.get("/user", homeController.listUser);
  router.post("/delete/user/:id", homeController.deleteUser);
  return app.use("/", router);
};

export default initWebRoutes;
