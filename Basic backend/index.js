const express = require('express')
const app = express()


function calculateSum(counter){
    var sum = 0;
    for(var i = 0; i < counter; i++){
        sum+=i;
    }
    return sum;
}

app.get('/',(req,res)=>{
        counter = req.query.counter
        result = calculateSum(counter)
        console.log(result);
        res.json({result})
})

app.listen(3000,()=>{
    console.log("server started on port 3000");
})

