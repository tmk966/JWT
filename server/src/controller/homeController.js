const home = (req, res) => {
  res.render("home.ejs");
};
const register = (req, res) => {
  res.render("register.ejs");
};

const createUser = (req, res) => {
  res.send("Register test");
  console.log(req);
};
module.exports = { home, register, createUser };
