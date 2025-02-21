const express = require("express");
const app = express();
const userController = require("./Controller/UserController");
const awsController = require("./Controller/AwsController");

app.use(express.json());

//!USERS!

app.post("/users", userController.createUser);

app.get("/users", userController.getUsers);

app.get("/users/:id", userController.getUser);

app.delete("/users/:id", userController.deleteUser);

app.put("/users/:id", userController.updateUser);

//*AWS*

app.post("/aws", awsController.createImage);

app.get("/aws", awsController.getImages);

app.get("/aws/:id", awsController.getImage);

app.delete("/aws/:id", awsController.deleteImage);

app.put("/aws/:id", awsController.updateImage);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}\n http://localhost:${port}`);
});
