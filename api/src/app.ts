import express from "express";
import "dotenv/config";
import expressConfig from "./framework/express";
import mongoDbConnection from "./framework/mongodb";
import PostRoutes from "./posts/post.routes";

const PORT = process.env.PORT || 3001;
const app = express();
expressConfig(app);

app.use(express.json());

const mongo = mongoDbConnection();
mongo.connectToMongo();

app.use("/posts", PostRoutes);

const server = app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));
export { app, server };
