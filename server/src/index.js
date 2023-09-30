import express from "express";
import initWebRoutes from "./routes/routes";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();
// view engine configuration
configViewEngine(app);

//body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes

initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Backen is running on PORT " + PORT);
});
