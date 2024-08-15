import Enrollment from '../models/Enrollement.js';

export const enrollInCourse = async (req, res) => {
    const { user, course } = req.body;

    try {
        const enrollment = new Enrollment({ user, course });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find().populate('user course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
