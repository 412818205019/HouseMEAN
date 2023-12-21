const express = require('express');
const Housekeeper = require('../models/Housekeeper');

const router = express.Router();

// Endpoint to create a new housekeeper
router.post('/create', async (req, res) => {
  try {
    const { name, hostel, floor, rooms, complaints, description, available } = req.body;
    const newHousekeeper = new Housekeeper({ name, hostel, floor, rooms, complaints, description, available });
    const savedHousekeeper = await newHousekeeper.save();
    res.status(201).json(savedHousekeeper);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to retrieve all housekeepers
router.get('/all', async (req, res) => {
  try {
    const housekeepers = await Housekeeper.find();
    res.status(200).json(housekeepers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await Housekeeper.findByIdAndDelete(jobId); // Using Housekeeper model for deletion

    if (!deletedJob) {
      return res.status(404).json({ message: 'Housekeeper not found' });
    }

    res.status(200).json({ message: 'Housekeeper deleted successfully', deletedJob });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
