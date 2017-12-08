/**
 * https://github.com/mapbox/node-sqlite3
 */

'use strict'

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')

  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }
  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    if (err) throw err
    console.log(row.id + ': ' + row.info)
  })
})

db.close()
