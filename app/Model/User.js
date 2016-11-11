'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden() {
    return ['password']
  }

  token () {
    return this.hasMany('App/Model/Token')
  }

  post () {
    return this.hasMany('App/Model/Post')
  }

  comment () {
    return this.hasMany('App/Model/Comment')
  }

}

module.exports = User
