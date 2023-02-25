import mongoose from "mongoose";

const connectDB = () => {
    // Only fields that are specified in schema will be saved in DB.
    mongoose.set("strictQuery", true);
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose
        .connect(process.env.DB_URL, connectionParams)
        .then(() => console.log("Connected to DB successfully"))
        .catch((error) => console.log(error));
};

export default connectDB;
