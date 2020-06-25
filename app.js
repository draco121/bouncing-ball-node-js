var express =require('express')
var app = express()
const {sqrt,pow} = require('mathjs')

app.get('/solve/:h/:e',async (req,res)=>{
    var hi = req.params.h;
    var e = req.params.e;
    var h=0
    var t=0
    var ht =[];
    for(i=0;i<10;i++)
    {
        h = pow(e,2)*hi;
        t = (sqrt(20*h))/5;
        var cp = {"h": h,"t": t}
        ht.push(cp);
        hi = h;
    }
    res.json(ht)
})
app.listen(3000)