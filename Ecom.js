const express=require("express");
const app=express();
const fs=require("fs");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Ecom.html");
})

app.get("/products",(req,res)=>{ 
    const querydata=req.query.name;
    fs.readFile(__dirname+"/Ecom.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        data=JSON.parse(data);
        let val=data.filter((ele)=>{
            if(querydata==ele.Category)
            return true;
        })
        res.send(val);
    })
    // res.send(req.query);
})

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is strated...");
    }
    
})