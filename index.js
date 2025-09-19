const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

let posts = [

]


app.get('/all', (req, res) => {

    res.json(JSON.stringify(posts))

})

app.post('/new',bodyParser.json(), (req, res) => {
    let id = generateId();
    let title = req.body.title;
    let description = req.body.discribe;

    posts.push({ id, title, description })
    res.send('Post created')
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
)


function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
