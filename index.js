'use strict'

module.exports = function () {
  var data = this.options

  if (this.query)
    data = data[this.query.slice(1)]

  return 'module.exports = ' + JSON.stringify(data)
}
