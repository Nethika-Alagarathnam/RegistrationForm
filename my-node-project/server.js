const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to handle signup form submissions
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    // Here, you can handle the signup process, such as saving the user to a database
    // For now, let's just log the submitted data
    console.log('Received signup form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Respond with a success message
    res.send('Signup successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
