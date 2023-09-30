import userService from "../service/userService";

//home page
const home = (req, res) => {
  res.render("home.ejs");
};
const listUser = async (req, res) => {
  let userList = await userService.getUser();

  res.render("user.ejs", { userList });
};
//register page
const register = (req, res) => {
  res.render("register.ejs");
};

const createNewUser = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  userService.createUser(email, username, password);

  return res.redirect("/user");
};
const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};
module.exports = { home, register, createNewUser, listUser, deleteUser };
