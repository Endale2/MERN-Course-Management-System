const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    roleId: { type: String, required: true },
    permissions: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);
