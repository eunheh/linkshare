'use strict'

const Schema = use('Schema')

class AddAvatarTableSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('url_avatar')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('url_avatar')
    })
  }

}

module.exports = AddAvatarTableSchema
