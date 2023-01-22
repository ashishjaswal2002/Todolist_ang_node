
const { request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine','ejs');
const items = ["Buy Chines Noodles","New York is My new Home"]

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const today = new Date();
    
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',

    };
    
    const day = today.toLocaleString('hi-IN',options);

   res.render('list',{WhichDay:day,listitems:items});
})

app.listen(3000,function(){
    console.log('Listening on port 3000');
})

//Post method
app.post('/',(req,res)=>{
    const item = req.body.data;
    items.push(item);
    res.redirect('/');
})