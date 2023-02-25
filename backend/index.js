import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import connectDB from "./database/connectDB.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import userRoutes from "./routes/users.routes.js";
import {getPolicy} from "./controllers/policyController.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/login", userRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Starts the server
const startServer = async () => {
    try {
        connectDB(); // Connects to the database.
        const port = process.env.PORT || 8080;
        app.listen(port, () => console.log(`Listening on port: ${port}`));
    } catch (error) {
        console.log(error);
    }
};

// Start of our server.
startServer();

getPolicy()