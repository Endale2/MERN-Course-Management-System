import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    status: { type: String, enum: ['active', 'completed', 'canceled'], default: 'active' },
    progress: { type: Number, default: 0 }, // percentage of completion
    enrolledAt: { type: Date, default: Date.now }
});

export default mongoose.model('Enrollment', EnrollmentSchema);
