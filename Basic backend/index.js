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

object = {
    1 : "One",
    2 : "Two",
    3 : "Three"
}

app.post('/getSomething', (req, res) => {
    const body = req.body;
    const count = body.count;
    const result = object[count];

    if (result) {
        res.json({ "result": result });
    } else {
        res.status(400).json({ "error": "Invalid count value" });
    }
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
})

