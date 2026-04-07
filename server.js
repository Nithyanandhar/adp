const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
// Serves your HTML file from the 'public' folder
app.use(express.static('public'));

// In-memory data storage (Replace with MongoDB later for permanent storage)
let cropData = [
    { id: 1, cropName: "Premium Turmeric", quantity: 150, price: 120 },
    { id: 2, cropName: "Sona Masuri Rice", quantity: 500, price: 60 }
];

// GET: Send all listings
app.get('/api/crops', (req, res) => {
    res.json(cropData);
});

// POST: Add a new listing
app.post('/api/add-crop', (req, res) => {
    const newCrop = {
        id: Date.now(),
        ...req.body
    };
    cropData.push(newCrop);
    res.status(201).send({ message: "Success" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});