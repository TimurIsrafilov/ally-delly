const express = require("express");
const path = require("path");
const users = require("./users");
const cors = require("cors");
const { PORT = 3001 } = process.env;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/users/:email", (req, res) => {
  const { email } = req.params;

  const user = users.find(
    (item) => item.email === email && item.password === req.body.password
  );
  if (user) {
    res.send(user);
  } else if (user === undefined) {
    res.status(400).send();
  } else {
    return error;
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
