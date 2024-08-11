import Lesson from '../models/Lesson.js';

export const createLesson = async (req, res) => {
    const { title, content, course, videoUrl } = req.body;

    try {
        const lesson = new Lesson({ title, content, course, videoUrl });
        await lesson.save();
        res.status(201).json(lesson);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find().populate('course');
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
