// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Serve static files from the React app (if it's a single-page app)
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Example root route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Contact Form API');
// });

// // Your API route
// app.post('/api/submit', (req, res) => {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     res.status(200).json({ message: 'Form submitted successfully' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });




const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const formRoutes = require('./routes/formRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/contact_form_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Serve static files from the React app (if it's a single-page app)
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.use('/api', formRoutes);

// Example root route
app.get('/', (req, res) => {
    res.send('Welcome to the Contact Form API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
