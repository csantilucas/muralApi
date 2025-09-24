module.exports = {
    post: [

    ],

    getAll() {
        return this.post
    },

    newPost(title, description) {
        this.post.push({ id: generateId(), title, description })
    },



    deletePost(id) {
        this.post = this.post.filter((p) => {
            return p.id != id;
        })
    }

}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

