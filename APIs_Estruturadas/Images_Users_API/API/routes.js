const express = require("express");
const app = express();
const userController = require("./Controller/UserController");
const imageController = require("./Controller/ImageController");

app.use(express.json());
//app.use('/users', userController);
//app.use( '/images' , imageController );

app.post("/users", async (req, res) => {
  try {
    const user = await userController.createUser(req);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await userController.getUsers();
    if (users.length === 0) {
      res.status(404).json({ message: "Users not found" });
    } else {
      res.json(users);
    }
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await userController.getUser(req);
    if (user === null) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});
app.delete("/users/:id", (req, res) => {
  try {
    userController.deleteUser(req);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400);
  }
});
app.put("/users/:id", async (req, res) => {
  try {
    const user = await userController.updateUser(req);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.post("/images", async (req, res) => {
  try {
    const image = await imageController.createImage(req);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.get("/images", async (req, res) => {
  try {
    const images = await imageController.getImages();
    res.json(images);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.get("/images/:id", async (req, res) => {
  try {
    const image = await imageController.getImage(req);
    if (image === null) {
      res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.delete("/images/:id", (req, res) => {
  try {
    imageController.deleteImage(req);
    res.status(204);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.put("/images/:id", async (req, res) => {
  try {
    const image = await imageController.updateImage(req);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}\n http://localhost:${port}`);
});
