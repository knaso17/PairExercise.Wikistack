const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const app = express();

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

// const init = async () => {
//   const PORT = 1337;
//   await Page.sync();
//   await User.sync();
//   // make sure that you have a PORT constant
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}!`);
//   });
// };

// init();

const init = async () => {
  const PORT = 1337;
  await db.sync({});
  app.listen(1337, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
