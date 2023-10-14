const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
    name: String,
    location: String,
    contactPerson: String,
    status: { type: String, default: 'pending' }, // pending/approved
    // ...other fields
});

module.exports = mongoose.model('BloodBank', bloodBankSchema);
