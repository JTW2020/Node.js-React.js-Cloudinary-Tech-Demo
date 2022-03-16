const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;


app.use(express.json());

app.listen(
    PORT,
    () => console.log(`being hosted on  http://localhost:${PORT}`)
)

app.get('/hello', (req, res) =>  {
    res.status(200).send({
        text: 'Hello this api was called'

    })
 });

 app.post('/hello/respond', (req, res) => {
    const { response } = req.body;

    if(!response) {
        res.status(418).send({message: 'you didnt respond!' })
    }
    res.send({
        reply: `${response}`
    })
    })