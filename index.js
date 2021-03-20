const express=require('express');
const fs = require('fs');
const app=express();
const path=require('path');
const getData=require('./src/datab');

const port=8001;
//built in middleware

const staticPath=path.join(__dirname,"public");


//to set the view engine

// app.set('views',staticPath);
app.set("view engine","hbs");

//for normal page
app.use(express.static(staticPath));





//template engine route
//In render we give filname which we want to render
//no need to five hbs
    
  

    let dat;
    let stk;

    getData();

        dat=fs.readFileSync('src/stock.json','utf-8');
        stk=JSON.parse(dat);

    

       
app.get("/",(req,res)=>{

    
  
    
    params={
        first:stk[0].Nifty.name,
        firstc:stk[0].Nifty.status,
        firsts:stk[0].Nifty.stoploss,
        firsttp:stk[0].Nifty.lastTradePrice,

        second:stk[0].Reliance.name,
        secondc:stk[0].Reliance.status,
        seconds:stk[0].Reliance.stoploss,
        secondtp:stk[0].Reliance.lastTradePrice,

        third:stk[0].Sbi.name,
        thirdc:stk[0].Sbi.status,
        thirds:stk[0].Sbi.stoploss,
        thirdtp:stk[0].Sbi.lastTradePrice,


        fourth:stk[0].Tata.name,
        fourthc:stk[0].Tata.status,
        fourths:stk[0].Tata.stoploss,
        fourthtp:stk[0].Tata.lastTradePrice,

        fivth:stk[0].Radico.name,
        fivthc:stk[0].Radico.status,
        fivths:stk[0].Radico.stoploss,
        fivthtp:stk[0].Radico.lastTradePrice


        
    }
    res.render('index',params);
    // res.render("index")
});




// app.get("/",(req,res)=>{
//     res.send("Hello for the express server");

// })

app.listen(port,()=>{
    console.log(`listening to the port:${port}`);
});

