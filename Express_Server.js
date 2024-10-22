const express = require("express");
const app = express();

// Handle requests to '/' and '/dashboard'
app.get('/', (req, res) => {
  res.send("Hello!!");
});

// Redirect '/abc' to the root '/'
app.get('/abc', (req, res) => {
  res.redirect("/");
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('404 Page not found');
});

// Start the server on port 6000
app.listen(3550, () => {
  console.log("Server running on Port 6000!!");
});
