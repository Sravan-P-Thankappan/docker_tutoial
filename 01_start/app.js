
const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{

    res.send("Docker Tutorial")
})

app.listen(port,()=>console.log("server started on port",port));