const express = require("express");
let app = express();
const createRoutes = require("./routes/routes");

app.use(express.json());
app = createRoutes(app);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}\n http://localhost:${port}`);
});
