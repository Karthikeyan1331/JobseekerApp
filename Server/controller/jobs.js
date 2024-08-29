const Jobs = require("../model/Job");

exports.jobsget = async (req, res) => {
    try {
        console.log("hello")
        const jobs = await Jobs.find({});

        // Send the list of jobs as the response
        res.status(200).json({
            success: true,
            data: jobs
        });
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error fetching jobs:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch jobs',
            error: error.message
        });
    }
};
exports.jobSearch = async (req, res) => {
    const { search } = req.body;

    if (!search) {
        return res.status(400).json({ message: 'Search term is required' });
    }

    try {
        // Perform the search across all relevant fields
        const jobs = await Jobs.find({
            $or: [
                { companyName: { $regex: search, $options: 'i' } },
                { type: { $regex: search, $options: 'i' } },
                { salary: { $regex: search, $options: 'i' } },
                { designation: { $regex: search, $options: 'i' } },
                { description: { $elemMatch: { $regex: search, $options: 'i' } } },
                { location: { $regex: search, $options: 'i' } }
            ]
        });

        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};