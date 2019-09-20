const db = require('../database/dbConfig.js');

module.exports = {
   get
};

function get() {
   return db('canvasprojects');
}