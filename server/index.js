import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/meinRoutes.js";

dotenv.config({path: './.env'});

const app = express();
const port = process.env.LOCAL_PORT
const mongoUrl = process.env.MONGODB_URL;

console.log('MongoDB URL:', mongoUrl)
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Conected to Db")
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)