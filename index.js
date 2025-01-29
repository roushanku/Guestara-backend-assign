
import express from "express";
import rootRouter from "./routes/index.js";
import connectDB from "./dB/mongoose.js";
import {PORT} from "./secret.js";

const app = express();

app.use(express.json());
app.use("/api", rootRouter);

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})