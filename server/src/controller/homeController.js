import userService from "../service/userService";

//? Home PAGE
const home = (req, res) => {
  res.render("home.ejs");
};
const listUser = async (req, res) => {
  let userList = await userService.getUser();

  res.render("user.ejs", { userList });
};

//? Register page
const register = (req, res) => {
  res.render("register.ejs");
};

//? Create user
const createNewUser = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  userService.createUser(email, username, password);

  return res.redirect("/user");
};

//? Delete user
const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};

//? GET update user
const updateUser = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getByID(id);
  let userData = {};
  userData = user;
  return res.render("/user");
};

//? Handle button update

const handleUpdate = async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  await userService.updateUser(username, email);
};
module.exports = {
  home,
  register,
  createNewUser,
  handleUpdate,
  listUser,
  deleteUser,
  updateUser,
};
