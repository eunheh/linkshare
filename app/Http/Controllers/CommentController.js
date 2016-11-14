'use strict'

class CommentController {

  * comment (request, response) {
    let postId = request.param('id')
    let content = request.only('content')
    let user = request.authUser

    if (user){
      let comment = yield Comment.create(content)
      response.status(201).json(comment)
    } else {
      response.status(403).json({ error: "User unauthorized" })
    }

  }

  * index (request, response) {
    let postId = request.param('id')
    let comment = yield Comment.query().where('content', postId)

    response.json(comment)
  }

}

module.exports = CommentController
