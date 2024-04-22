const express = require('express')
const app = express()

app.use(express.json());

function calculateSum(counter){
    var sum = 0;
    for(var i = 0; i < counter; i++){
        sum+=i;
    }
    return sum;
}
// Middleware
function middleware1(req,res,next){
    console.log("from inside middleware" + req.query.counter)
    next();
}

app.get('/',middleware1,(req,res)=>{
        counter = req.query.counter
        console.log(req.body);
        result = calculateSum(counter)
        console.log(result);
        res.status(201).json({result});

})

app.listen(3000,()=>{
    console.log("server started on port 3000");
})