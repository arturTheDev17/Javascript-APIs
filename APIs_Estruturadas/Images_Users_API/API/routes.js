const express = require("express");
const app = express();
const userController = require("./Controller/UserController");
const imageController = require("./Controller/ImageController");
const awsController = require("./Controller/AwsController")

app.use(express.json());

app.post("/users", userController.createUser );

app.get("/users", userController.getUsers );

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

app.delete("/users/:id", userController.deleteUser);
app.put("/users/:id", async (req, res) => {
  try {
    const user = await userController.updateUser(req);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.post("/aws", awsController.createImage); 

app.get("/aws", awsController.getImages);

app.get("/aws/:id", awsController.getImage );

app.delete("/aws/:id", awsController.deleteImage);

app.put("/aws/:id", async (req, res) => {
  try {
    const image = await awsController.updateImage(req);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}\n http://localhost:${port}`);
});
