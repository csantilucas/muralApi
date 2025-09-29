const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const post = require('../model/post')
const cors = require ('cors')

const option = {
    origin: 'http://localhost:3000'

}
router.use(cors(option));

router.get('/all', (req, res) => {

    res.json(JSON.stringify(post.getAll()))

})

router.post('/new',bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;
    post.newPost(title, description)    
    res.send('Post created')
})

router.delete('/delete/:id',(res, req) => {
    let id = req.params.id
    post.deletePost(id)
    res.send('post deletado com sucesso')
} )


module.exports=router