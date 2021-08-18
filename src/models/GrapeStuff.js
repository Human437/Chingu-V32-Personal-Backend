const mongoose = require("mongoose");

const GrapeSchema = new mongoose.Schema({
  html: {
    type: String,
  },
  css: {
    type: String,
  },
  components: {
    type: Object,
  },
  styles: {
    type: Object,
  },
});

module.exports = mongoose.model("GrapeSchema", GrapeSchema);
