'use strict'

const Post = use("App/Model/Post")

class PostController {

  * submit (request, response) {
    let userId = request.param('id')
    let link = request.only('title', 'url')
    link.user_id = userId
    let user = request.authUser

    if (user){
      let post = yield Post.create(link)
      response.status(201).json(post)
    } else {
      response.status(403).json({ error: "User unauthorized" })
    }

  }

  * index (request, response) {
    let userId = request.param('id')
    let post = yield Post.query().orderBy('updated_at', 'desc').fetch()

    response.json(post)
  }

  * delete (request, response) {
    let user = request.authUser
    let postId = request.param('post_id')
    let post = yield Post.query().where('id', postId)

    if (user.id = postId){
      post = yield Post.query().where('id', postId).del()
      response.json(post)
    } else {
      response.status(403).json({ error: "User unauthorized" })
    }
  }
}

module.exports = PostController
