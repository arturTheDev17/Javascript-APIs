const userService = require("../service/UserService");

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    if (users.length === 0) {
      res.status(404).json({ message: "Users not found" });
    } else {
      res.json(users);
    }
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function getUser(req, res) {
  try {
    const user = await userService.getUser(req.params.id);
    if (user === null) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function updateUser(req, res) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function deleteUser(req, res) {
  try {
    userService.deleteUser(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400);
  }
}

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
