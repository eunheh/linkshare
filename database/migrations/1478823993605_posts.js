'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.string('title')
      table.string('url')
      table.string('url_img')
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
