import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import plantRoute from "./route/plant.route.js";
import userRoute from "./route/user.route.js";
import path from "path"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB
try{
   mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });
   console.log("Connected to mongoDB");
} catch (error){
  console.log("Error: ", error);
}

//defining routes
app.use("/plant", plantRoute);
app.use("/user", userRoute);

//deployment
if(process.env.NODE_ENV === "production"){
 const dirPath = path.resolve();
 app.use(express.static("./FRONTEND-1/dist"));
 app.get("*",(req,res) => {
  res.sendFile(path.resolve(dirPath, "./FRONTEND-1/dist", "index.html"));
 })
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})