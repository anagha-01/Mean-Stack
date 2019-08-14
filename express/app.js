const Express=require('express')
var app=new Express()
app.get('/',(req,res)=>{        //setting route
    res.send("Welcome")
})
app.get('/home',(req,res)=>{        
    res.send("Welcome to my home page")
})
app.listen(3000)  //port number-3000