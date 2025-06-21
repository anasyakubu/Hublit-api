import express from "express";
import { Request, Response, NextFunction } from "express";
import { authMiddleware } from "@kinde-oss/kinde-node-express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";
import bodyParser from 'body-parser';
import connection from "./config/db.config";
import routes from "./routes/index";
import Kinde from "./config/kinde.config";

dotenv.config(); // to access all .env files

const app = express();

//***************** database connection ******************//
const connect = connection;

//console.log("Database", connect); // logout the connection (1)

//********************** middleware **********************//
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ type: 'application/json' })); // for parsing application/json
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware(Kinde));


//********************** Request logging middleware **********************//
app.use((req: Request, res: Response, next: NextFunction) => { console.log(`${req.method} ${req.url}`); next(); });

//*********** Create corsOptions object with your desired configuration ***********//
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: "GET,POST,DELETE,PUT", // Set the allowed HTTP methods
  optionsSuccessStatus: 200, // Set the status code for successful preflight requests
};

//*********** Pass corsOptions to the CORS middleware ***********//
app.use(cors({ ...corsOptions, credentials: true }));


app.use(errorHandler); // for handling error

//********************** define routes **********************//
app.use("/", routes); // all routes here[]

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is starting on port: http://localhost:${PORT}`));

export default app;