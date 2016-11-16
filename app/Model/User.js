'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden() {
    return ['password']
  }

  token () {
    return this.hasMany('App/Model/Token')
  }

  posts () {
    return this.hasMany('App/Model/Post')
  }

  comments () {
    return this.hasMany('App/Model/Comment')
  }

}

module.exports = User
