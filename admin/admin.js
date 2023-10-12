const express = require('express');
const router = express.Router();
const BloodBank = require('../models/BloodBank');

// Route to get pending signup requests
router.get('/pending-requests', async (req, res) => {
    try {
        const pendingRequests = await BloodBank.find({ status: 'pending' });
        res.json(pendingRequests);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Route to approve a signup request
router.put('/approve-request/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBloodBank = await BloodBank.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
        // Save the approved blood bank to a different database
        // ... code to save to a different database
        res.json(updatedBloodBank);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
