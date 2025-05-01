import dotenv from "dotenv";
import express from "express"
import waitlistRoutes from "./routes/waitlist-routes.js";
import rateLimiterMiddleware from "./middlewares/rateLimiter-middleware.js";
import { connectDB } from "./database/db.config.js";
import cors from "cors";
dotenv.config()
const app = express()
const FRONTEND_URL = process.env.NODE_ENV === "development" ? process.env.DEV_FRONTEND_URL : process.env.PROD_FRONTEND_URL
const corsOptions = {
  origin: [FRONTEND_URL], 
  methods: "GET,POST,PUT,DELETE", 
  allowedHeaders: "Content-Type,Authorization", 
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
const port = process.env.PORT
app.get("/health", (_, res) => {
    res.status(200).send("OK");
  });
app.use('/api/v1', rateLimiterMiddleware);
app.use("/api/v1", waitlistRoutes)
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
})