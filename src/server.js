import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import methodOverride from "method-override";
import viewEngine from "./configs/viewEngine";
import initRoute from "./routes/web";
import connectDB from "./configs/connectDB";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//config views engine
viewEngine(app);
//init route
initRoute(app);

//connect db
connectDB();

app.listen(port, () => {
  console.log(`Server is listening http://localhost:${port}`);
});
