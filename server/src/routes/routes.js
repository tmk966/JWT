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
  router.post("/user/create-user", homeController.createUser);
  return app.use("/", router);
};

export default initWebRoutes;
