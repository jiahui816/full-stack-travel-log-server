const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    comments: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90,
    },
    longitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180,
    },
    visitDate: {
      required: true,
      type: Date,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;
