const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Contract', 'Internship'], // Adjust as needed
        required: true
    },
    salary: {
        type: String,
        required: false // Optional field, adjust as needed
    },
    designation: {
        type: String,
        required: true
    },
    description: {
        type: [String], // Array of strings
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Job = mongoose.model('Jobs', jobSchema, 'Jobs');

module.exports = Job;
