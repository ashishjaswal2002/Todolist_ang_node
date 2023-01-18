const { request } = require('express');
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    const today = new Date();

    if(today.getDay()===4 || today.getDay()===0){
        res.send("Yay its  the weekend");
    }else{
        res.send('Boo i have to work');
    }
   
})

app.listen(3000,function(){
    console.log('Listening on port 3000');
})