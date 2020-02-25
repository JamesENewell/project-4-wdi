const mongoose = require("mongoose");
import { format } from "date-fns";

const developerSchema = new mongoose.Schema({
  // add more keys/values if we think of anything else that's needed
  companyName: String,
  companySize: { type: String, enum: ["Small", "Medium", "Large", "Unknown"] },
  founded: Date,
  description: String,
  image: String,
  skills: String,
  location: {
    lat: Number,
    lng: Number
  },
  telNumber: String,
  email: String,
  portfolio: Array
});

developerSchema.path("founded").get(function formatDate(dob) {
  return format( Date(dob), 'YYYY/MM/DD');
});

developerSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Developer", developerSchema);
