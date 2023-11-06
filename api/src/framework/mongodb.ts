import "dotenv/config";
import mongoose from "mongoose";

export default function mongoDbConnection() {
  let mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
  mongoose.set("debug", true);
  if (process.env.DB_USER && process.env.DB_PASSWORD) {
    mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
  }
  const connectToMongo = () => {
    mongoose
      .connect(mongoUri)
      .then(
        () => {},
        (err) => {
          throw new Error(`Error connecting with mongo: ${err}`);
        }
      )
      .catch((err) => {
        throw new Error(`Error connecting with mongo: ${err}`);
      });
  };

  mongoose.connection.on("error", (error) => {
    mongoose.disconnect();
    throw new Error(`Error in MongoDb connection: ${error}`);
  });

  return {
    connectToMongo,
  };
}
