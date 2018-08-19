const merge = require('../utils/merge-hypocoristics');

const en = require('./en');
const pl = require('./pl');

module.exports = merge(en, pl);
