const db = require('../database/connections');

module.exports = {
    add,
    find,
    remove
};

function add(department) {
    return db('departments').insert(department, 'id');
};

function find() {
    return db('departments');
};

function remove(id) {
    return db('departments').del().where('id', id);
};