const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { db } = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT;

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      len: [8, 64],
    },
  },
  marketingEmails: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  token: {
    type: DataTypes.TEXT,
  },
});

// Instance methods
User.prototype.correctPassword = function (candidatePwd) {
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, secret);
};

// Class methods
User.authenticate = async function ({ firstName, password }) {
  const user = await this.findOne({ where: { firstName } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect name/password');
    error.status = 401;
    throw error;
  }
  return user;
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, secret);
    const user = await User.findByPk(id);
    if (!user) {
      throw 'User not found';
    }
    return user;
  } catch (ex) {
    const error = Error('bad token');
    error.status = 401;
    throw error;
  }
};

// Hooks
User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = {
  User
};
