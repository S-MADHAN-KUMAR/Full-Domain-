const express = require("express");
const app = express();

const users = [{ id: 1, name: "ejaz" }, { id: 2, name: "madhan" }];

// Route to get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Route to get a specific user by ID
app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => userId === user.id); // Corrected 'user.id'

    if (!user) {
        // Set status code before sending the response
        res.status(404).send("No User found");
    } else {
        res.json(user);
    }
});

// Start the server
app.listen(4400, () => {
    console.log("Server is running on Port 4400...");
});
