import app from "./app.js";
import connectDB from "./db/db.js";


connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("server is running");
})
}).catch((err)=>{
    console.log("failed to connect database",err)
});

