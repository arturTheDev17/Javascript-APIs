const express = require("express");
const userService = require("../Service/UserService");


async function getUsers(req,res) {
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

async function createUser(req , res) {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function getUser(req) {
  const id = req.params.id;
  return await userService.getUser(id);
}

async function updateUser(req) {
  const id = req.params.id;
  return await userService.updateUser(id, req.body);
}

async function deleteUser(req) {
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
