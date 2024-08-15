import Course from '../models/Course.js';
import Category from '../models/Category.js';

export const createCourse = async (req, res) => {
    const { title, description, categoryId, instructorId, price , level, language} = req.body;

    try {
        const course = new Course({ title, description, categoryId, instructorId, price ,level, language });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('categoryId instructorId');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
