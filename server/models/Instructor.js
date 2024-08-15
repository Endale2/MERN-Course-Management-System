import mongoose from 'mongoose';

const InstructorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, required: true },
    coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    ratings: { type: Number, default: 0 },
    earnings: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Instructor', InstructorSchema);
