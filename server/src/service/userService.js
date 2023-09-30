import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
// get the promise implementation, we will use bluebird
import bluebird from "bluebird";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashPasswords = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

// create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql",
//   database: "jwt",
// });

const createUser = async (email, password, username) => {
  let hashPassword = hashPasswords(password);

  //check sql
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users(email, password, username) VALUES (?,?,?)",
      [email, hashPassword, username]
    );
  } catch (error) {
    console.log(error);
  }
};

//GET USER
const getUser = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM `users`");
    return rows;
  } catch (error) {
    console.log(error);
  }
};

// delete user
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      " DELETE FROM users WHERE id = ?",
      [id]
    );
  } catch (error) {
    console.log(error);
  }
  //;
};
module.exports = { createUser, getUser, deleteUser };
