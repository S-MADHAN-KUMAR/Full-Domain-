const express = require("express");
const app = express();

app.get('/', (req, res) => {
    const { num1, num2 } = req.query;

    // Input validation
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        res.send("Please enter valid numbers!");
    } else {
        // Parse the query params as floats for accurate math operations
        const sum = parseFloat(num1) + parseFloat(num2);
        res.send(`The sum is: ${sum}`);
    }
});

app.listen(5500, () => {
    console.log("Server running on port 5500...");
});
