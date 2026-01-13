const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, required: true, unique: true },
  avatar: String,
  role: { 
    type: String, 
    enum: ['ADMIN', 'USER', 'AUDITOR'], 
    default: 'USER' 
  },
  permissions: { type: [String], default: [] },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);