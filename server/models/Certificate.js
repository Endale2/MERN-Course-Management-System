const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    certificateId: { type: String, required: true },
    issuedAt: { type: Date, default: Date.now },
    downloadLink: { type: String }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
