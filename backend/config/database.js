import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = () => {
  connect(process.env.MONGO_URI)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1);
    });
};

export default connectDatabase;