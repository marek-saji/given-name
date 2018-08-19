const hypocoristics = require('./hypocoristics');

module.exports = [... new Set([].concat(...hypocoristics))]
