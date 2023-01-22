
const express = require('express');

const app = express();
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    const today = new Date();
     const current  = today.getDay();
     const day = " ";
    if(current===6 || current===0){
        day="Fucking Day";

        
    }else{
        day = "Work Day";
      
    }
   res.render('list',{WhichDay:day})
})

app.listen(3000,function(){
    console.log('Listening on port 3000');
})

//Starting with ejs 266....