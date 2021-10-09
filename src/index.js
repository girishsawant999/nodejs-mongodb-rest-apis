import express from "express";
import { UsersRoutes } from "./routes";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;

const MONGODB_URI = "mongodb://127.0.0.1:27017/mydb";
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
    console.log(`[Mongo DB] Connected Succesfully`);
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request`, req.method, req.originalUrl);
  next();
});

app.use("/users", UsersRoutes);

app.get("/", (req, res) => {
  res.send(`
  <h2>The server is running</h2>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
