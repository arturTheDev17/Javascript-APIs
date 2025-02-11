const express = require("express");
const router = express.Router();
const awsService = require("../Service/AwsService");

router.use(express.json());

async function getImages() {
    return await awsService.getImages();
}

async function createImage(req) {
    return await awsService.createImage(req.body);
  }
  
  async function getImage(req) {
    const id = req.params.id;
    return await awsService.getImage(id);
  }
  
  async function updateImage(req) {
    const id = req.params.id;
    return await awsService.updateImage(id, req.body);
  }
    
  async function deleteImage(req) {
    const id = req.params.id;
    await awsService.deleteImage(id);
  }
  
  module.exports = {
    getImages,
    createImage,
    getImage,
    updateImage,
    deleteImage,
  };
  