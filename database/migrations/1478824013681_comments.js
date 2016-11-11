'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('post_id')
      table.string('content')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
