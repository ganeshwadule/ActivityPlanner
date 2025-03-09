const express = require("express");
const cors = require("cors");
const { addUser, Users } = require("./dbManager");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.post("/api/user", async (req, res) => {
  const response = await addUser(req.body.email, req.body.password);
  if (!response) {
    return res.status(409).json({ message: "User already exists" });
  }
  return res.status(201).json({ message: response });
});

app.post("/api/user/login", async (req, res) => {
  const User = await Users();
  const isUserExist = User.hasOwnProperty(req.body.email);
  console.log(req.body.email);
  console.log(isUserExist);

  if (!isUserExist)
    return res.json({ message: "User with this mail doesn't exists" });

  const isCorrectPassword = User[req.body.email] === req.body.password;

  if (!isCorrectPassword) return res.json({ message: "Incorrect password" });

  return res.status(201).json({ message: "success" });
});

app.get("api/user/:email",(req,res)=>{

})


app.listen(3000, () => console.log("server is running"));
