const db = require('../database/connections');

module.exports = {
    add,
    find,
    remove
};

function add(employee) {
    return db('employees').insert(employee, 'id');
};

function find() {
    return db('employees');
};

function remove(id) {
    return db('employees').del().where('id', id);
};