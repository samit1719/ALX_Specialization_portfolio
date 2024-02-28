
const express = require("express");
const fs = require("fs");
const router = express.Router();


router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Read existing users from users.json
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }

    const users = JSON.parse(data);

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Add new user to users array
    const newUser = { email, password };
    users.push(newUser);

    // Write updated users data back to users.json
    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }

      res.status(201).json({ message: "User created successfully" });
    });
  });
});

module.exports = router;
