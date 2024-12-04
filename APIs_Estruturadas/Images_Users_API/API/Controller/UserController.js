const express = require('express');
const router = express.Router();
const userService = require('../Service/UserService');

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.post('/', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userService.updateUser(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.status(204).json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
});

module.exports = router;