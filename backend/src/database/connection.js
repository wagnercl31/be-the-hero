const knex = require('knex');
const configuration = require('../../knexfile'); // voltando duas pastas para chegar ate a pasta "knexfile"

const connection = knex(configuration.development);

module.exports = connection;


