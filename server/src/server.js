import dotenv from "dotenv";
import express from "express"
import waitlistRoutes from "./routes/waitlist-routes.js";
import rateLimiterMiddleware from "./middlewares/rateLimiter-middleware.js";
import { connectDB } from "./database/db.config.js";
dotenv.config()
const app = express()
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