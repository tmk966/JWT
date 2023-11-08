import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
// get the promise implementation, we will use bluebird
import bluebird from "bluebird";
import db from "../models";
// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashPasswords = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createUser = async (email, username, password) => {
  let hashPassword = hashPasswords(password);

  try {
    await db.User.create({
      username: username,
      email: email,
      password: hashPassword,
    });
  } catch (error) {
    console.log(error);
  }
};

//GET USER
const getUser = async () => {
  //TODO Test Relationship
  let newUser = await db.User.findOne({
    where: { id: 1 },
    raw: true,
    include: db.Group,
    nest: true,
  });

  let roles = await db.Group.findAll({
    raw: true,
    include: db.Role,
    where: { id: 1 },
    nest: true,
  });
  console.log(">>>Check new user:", newUser);
  console.log(">>>Check new role:", roles);

  let users = [];
  users = await db.User.findAll();
  return users;
};

// delete user
const deleteUser = async (id) => {
  await db.User.destroy({
    where: { id: id },
  });
};

//get by ID
const getByID = async (id) => {
  let user = {};
  user = await db.User.findOne({
    where: { id: id },
  });
};

module.exports = { createUser, getUser, deleteUser, getByID };
