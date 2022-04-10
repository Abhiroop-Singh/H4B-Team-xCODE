const express=require("express")
const app=express()
const port=3000

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.status(200).render("/public/index.html");
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})