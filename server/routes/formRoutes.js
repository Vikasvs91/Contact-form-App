// // server/routes/formRoutes.js
// const express = require('express');
// const router = express.Router();
// const Form = require('../models/Form');

// // Route to handle form submission
// router.post('/submit', async (req, res) => {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         const formData = new Form({ name, email, message });
//         await formData.save();
//         res.status(200).json({ message: 'Form submitted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save data' });
//     }
// });

// // Route to get all submitted data
// router.get('/getFormData', async (req, res) => {
//     try {
//         const formData = await Form.find();
//         res.status(200).json(formData);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve data' });
//     }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const FormData = require('../models/Form'); // Assuming you have a FormData model

// Route to get all submitted form data
router.get('/getFormData', async (req, res) => {
    try {
        const formData = await FormData.find(); // Adjust according to your schema/model
        res.status(200).json(formData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

module.exports = router;