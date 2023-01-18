const { request } = require('express');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    const today = new Date();
     const current  = today.getDay();
    if(current===6 || current===0){


        res.send("<h1>Yay its  the weekend</h1>");
    }else{
       res.sendFile(__dirname+'/index.html');
    }
   
})

app.listen(3000,function(){
    console.log('Listening on port 3000');
})

//Starting with ejs 266....