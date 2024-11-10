
import  dotenv from  "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"
import express from "express";
import { connectDB } from "./db/connecttodb.js";
 import {app ,server} from "./socket/socket.js";

dotenv.config()



app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000
app. get ( "/" ,
    (req, res)=> {
    // root route http://localhost:5090/
    res.send("hello") })

app.use ( "/api/auth" ,authRoutes)
app.use ( "/api/messages" ,messagesRoutes)

app.use("/api/users", userRoutes);







server.listen(PORT,()=>{
    connectDB()
    console.log(`port running on ${PORT}`);
})
