const express = require("express");
// const router = express.Router();
const userService = require("../Service/UserService");

// router.use(express.json());

// router.get("/", async (req, res) => {
async function getUsers() {
  return await userService.getUsers();
}
// });

// router.post("/", async (req, res) => {
async function createUser(req) {
  return await userService.createUser(req.body);
}
// });

// router.get("/:id", async (req, res) => {
async function getUser(req) {
  const id = req.params.id;
  return await userService.getUser(id);
}
// });

// router.put("/:id", async (req, res) => {
async function updateUser(req) {
  const id = req.params.id;
  return await userService.updateUser(id, req.body);
}
// });

// router.delete("/:id", async (req, res) => {
async function deleteUser(req) {
  const id = req.params.id;
  await userService.deleteUser(id);
}
// });

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
