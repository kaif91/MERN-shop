import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error:${err}`);
    process.exit(1);
  }
};

export default connectDB;
