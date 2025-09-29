//chamada para o BACKEND API
let urlGet = 'http://localhost:3000/api/all'
let urlPost = 'http://localhost:3000/api/new'


document.addEventListener('DOMContentLoaded', () => {
    updatePost()
})

function updatePost() {

    fetch(urlGet)
        .then(res => {
            return res.json()
        })
        .then(res => {

            let postElemnts = ''
            let posts = JSON.parse(res)


            posts.forEach((post) => {
                let postElemnt = ` <div  id=${post.id} class="card mb-4">
                                        <div class="card-header">
                                            <h5 class="card-tite">${post.title}</h5>
                                                <div class="card-body">
                                                    <div class="card-text">${post.description}</div>
                                                </div>
                                        </div>
                                    </div>`
                postElemnts += postElemnt
            })
            document.getElementById("posts").innerHTML = postElemnts

        })

}



function newPost() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

    let post = {title,description}

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }
    fetch(urlPost, options)
        .then(res => {
            console.log(res)
            updatePost()
            document.getElementById('title').value=''
            document.getElementById('description').value=''
        })

}