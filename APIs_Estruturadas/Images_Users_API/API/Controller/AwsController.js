const express = require("express");
const router = express.Router();
const awsService = require("../Service/AwsService");

router.use(express.json());

async function getImages(req, res) {
    try {
      const images = await awsService.getImages();
      res.json(images);
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
}

async function createImage(req, res) {
    try {
      const image = await awsService.createImage(req.body);
      res.json(image);
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
}
  
  async function getImage(req , res) {
    try {
      const image = await awsService.getImage(req.params.id);
      if (image === null) {
        res.status(404).json({ message: "Image not found" });
      }
      res.json(image);
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
  }
  
  async function updateImage(req) {
    const id = req.params.id;
    return await awsService.updateImage(id, req.body);
  }
    
  async function deleteImage(req, res) {
    try {
      awsService.deleteImage(req.params.id);
      res.status(200).json({ message: "Image deleted" });
    } catch (error) {
      res.status(400);
    }
  }
  
  module.exports = {
    getImages,
    createImage,
    getImage,
    updateImage,
    deleteImage,
  };
  