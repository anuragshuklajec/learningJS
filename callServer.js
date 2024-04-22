// fetch('http://127.0.0.1:3000/todos', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title : "buy Grocery",
//         completed : false,
//         description : "Go out and buy milk from dairy"
//     })
// })
// .then((res) => {
//     res.json().then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//     });
// })



fetch('http://127.0.0.1:3000/todos/9824', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        completed : true,
    })
})
.then((res) => {
    res.json().then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
})

fetch('http://127.0.0.1:3000/todos', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => {
    res.json().then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
})