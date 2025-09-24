const express = require('express');
const bodyParser = require('body-parser');
const post = require('./model/post')
const app = express();
const port = 3000;




app.get('/get', (req, res) => {

    res.json(JSON.stringify(post.getAll()))

})

app.post('/post',bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;
    post.newPost(title, description)    
    res.send('Post created')
})

app.delete('/delete/:id',(res, req) => {
    let id = req.params.id
    post.deletePost(id)
    res.send('post deletado com sucesso')
} )

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
)



