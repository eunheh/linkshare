'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {

  * register (request, response) {
    let input = request.only('email', 'username', 'password')
    input.password = yield Hash.make(input.password)
    let user = yield User.create(input)

    response.status(201).json(user)
  }

  * login (request, response) {
     let input = request.only('username', 'password')

     try {
       let user = yield User.findBy('username', input.username)
       let verify = yield Hash.verify(input.password, user.password)
       if (!verify) { throw new Error()}

       user.access_token = yield request.auth.generate(user)

       response.json(user)
     } catch (e) {
       response.status(401).json({ error: "No such user or password" })
     }
   }

   * auth_test (request, response) {
     let user = request.authUser

     response.json(user)
   }

}

module.exports = UserController
