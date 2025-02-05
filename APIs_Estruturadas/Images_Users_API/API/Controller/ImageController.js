const express = require("express");
const router = express.Router();
const imageService = require("../Service/ImageService");

router.use(express.json());

// router.get("/", async (req, res) => {
async function getImages(req, res) {
  return await imageService.getImages();
}
// });

// router.post("/", async (req, res) => {
async function createImage(req) {
  return await imageService.createImage(req.body);
}
// });

// router.get("/:id", async (req, res) => {
async function getImage(req) {
  const id = req.params.id;
  return await imageService.getImage(id);
}
// });

// router.put("/:id", async (req, res) => {
async function updateImage(req) {
  const id = req.params.id;
  return await imageService.updateImage(id, req.body);
}
// });

// router.delete("/:id", async (req, res) => {

async function deleteImage(req) {
  const id = req.params.id;
  await imageService.deleteImage(id);
}
// });

module.exports = {
  getImages,
  createImage,
  getImage,
  updateImage,
  deleteImage,
};
