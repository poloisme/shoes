const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const methodOverride = require("method-override");
const viewEngine = require("./configs/viewEngine");
const initRoute = require("./routes/web");
const connectDB = require("./configs/connectDB");
const cors = require("./middlewares/cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors);

//config views engine
viewEngine(app);
//init route
initRoute(app);

//connect db
connectDB();

app.listen(port, () => {
  console.log(`Server is listening http://localhost:${port}`);
});
