const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema(
  {
    medicinecode: {
      type: String,
      required: [true, 'medicinecode is required'],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'category is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: {
        values: ['Draft', 'In Review', 'Approved', 'Published'],
        message: 'Status must be Draft, In Review, Approved, or Published',
      },
      default: 'Draft',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: 'medicines',
  }
);

module.exports = mongoose.model('Medicine', medicineSchema);