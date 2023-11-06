import express from "express";
import "dotenv/config";
import expressConfig from "./framework/express";
import mongoDbConnection from "./framework/mongodb";
import PostRoutes from "./posts/post.routes";

const PORT = process.env.PORT || 3001;
const app = express();
expressConfig(app);

app.use(express.json());

// DB configuration and connection create
const mongo = mongoDbConnection();
mongo.connectToMongo();

// routes for each endpoint
app.use("/posts", PostRoutes);

const server = app.listen(PORT, () =>
  console.log(`Listo por el puerto ${PORT}`)
);
export { app, server };
