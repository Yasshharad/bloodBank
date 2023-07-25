import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "./src/database/connection";

// APIs
import BloodBank from "./src/api/Bloodbank";
import BloodCamp from "./src/api/BloodCamp";
import BloodDonate from "./src/api/BloodDonate";

dotenv.config();


const myBloodBank = express();

// adding additional passport configuration

myBloodBank.use(express.json());


myBloodBank.get("/", (req, res) => {
    res.json({
        message: "Server is running",
    });
});

// apis

myBloodBank.use("/bloodBank", BloodBank);
myBloodBank.use("/bloodCamp", BloodCamp);
myBloodBank.use("/bloodDonate", BloodDonate);


const PORT = 4000;

myBloodBank.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});