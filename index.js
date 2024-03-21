console.log("kaas");
import express from "express";

const app = express();
const port = 3000;
app.use(express.static('public'));
const cheese = [
    {
        name: 'blauwe kaas',
        description: 'het is een smerige schimmelkaas'
    },
    {
        name: 'geiten kaas',
        description: 'het is nog geiter dan een geit'
    },
    {
        name: 'oude kaas',
        description: 'het is nog ouder dan je vader'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/kaas', (req, res) => {
    res.json(cheese);


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});