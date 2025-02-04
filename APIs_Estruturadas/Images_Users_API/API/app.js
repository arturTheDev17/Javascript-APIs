const express = require('express');
const app = express();
const userController = require('./Controller/UserController');
const imageController = require('./Controller/ImageController');

app.use('/users', userController);
app.use( '/images' , imageController );

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}\n http://localhost:${port}`);
});