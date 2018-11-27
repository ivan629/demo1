const Sequelize = require('sequelize');
const params = require('./params.js');

const Op = Sequelize.Op;
const sequelize = new Sequelize(params.database, params.username, params.password, {
  dialect: params.dialect,
  port: 5432,
  omitNull: true,
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  }
});

const db = {};

// const Op = Sequelize.Op;
// db.Op = Op;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
// db.events = require('../models/event.model')(sequelize, Sequelize);

module.exports = db;
