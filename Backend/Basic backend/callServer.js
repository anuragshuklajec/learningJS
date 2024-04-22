

fetch('http://127.0.0.1:3000/getSomething', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        count: 2
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