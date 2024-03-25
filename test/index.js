import express from "express";

const app = express();
const port = 3000;
app.use(express.static('public'));

const stones = [
    {
        title: "stone 1",
        description: "this is the biggest stone",
        image: 'link'
    }, {
        title: "stone 2",
        description: "this is the smallest stone",
        image: 'link'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/steen', (req, res) => {
    res.json(stones);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})