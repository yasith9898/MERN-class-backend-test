import bodyParser from 'body-parser';
import express from 'express';


const app = express();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    console.log("hello from backend");
    res.json({message:"hello from backend"});
});

app.post("/",(req,res)=>{
    const name=req.body.name
    const message = "hi"+name
    
    

    console.log("data posted");
    res.json({message:message});
});

app.listen(5000,(req,res)=>{
    console.log("server is running on port 3000");
});