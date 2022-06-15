const express = require('express');
const app = express();

app.use((req, res, next) => {
    let workingTime = new Date();
    if( 9>workingTime.getHours() || workingTime.getHours()>=17  || workingTime.getDay()===0 || workingTime.getDay()===6) {
        return res.sendFile(__dirname + "/public/closed.html")
    }
    next()
  })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
});
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/css/style.css')

});
app.get('/ContactUs',(req,res)=>{
    res.sendFile(__dirname+'/public/ContactUs.html')
});
app.get('/OurService',(req,res)=>{
    res.sendFile(__dirname+'/public/OurService.html')
});


const port = 3000

app.listen(port,(err)=>err?console.log(err):console.log(`server ye5dem 3al port ${port}`))