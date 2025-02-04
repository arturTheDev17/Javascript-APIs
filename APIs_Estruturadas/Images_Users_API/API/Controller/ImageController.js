const express = require('express');
const router = express.Router();
const imageService = require('../Service/ImageService');

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const images = await imageService.getImages();
    res.json(images);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.post('/', async (req, res) => {
    try {
        const image = await imageService.createImage(req.body);
        res.json(image);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const image = await imageService.getImage(id);
    if (!image) {
      res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const image = await imageService.updateImage(id, req.body);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await imageService.deleteImage(id);
    res.status(204).json({ message: 'Image deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

module.exports = router;
