const mongoose = require("mongoose");

const DosenSchema = mongoose.Schema({
  // Buat Schema data

  nama: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Dosen", DosenSchema);
