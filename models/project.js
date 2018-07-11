const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectType: String,
  projectBrief: String,
  skillsRequired: String
});

module.exports = mongoose.model('Project', projectSchema);
