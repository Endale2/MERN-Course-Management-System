import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    price: { type: Number, required: true },
    thumbnail: { type: String },
    videoIntro: { type: String },
    language: { type: String, required: true },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    duration: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
    requirements: [{ type: String }],
    whatYouWillLearn: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Course', CourseSchema);
