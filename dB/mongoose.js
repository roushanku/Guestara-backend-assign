import mongoose from 'mongoose';
import {MONGO_URI} from '../secret.js';
const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB connection SUCCESS");
    }

    catch(error) {
        console.log(error.message);
    }
}

export default connectDB;