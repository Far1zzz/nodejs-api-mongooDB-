// (4) Buat Schema Mahasiswa
const mongoose = require("mongoose");

const MahasiswaSchema = mongoose.Schema({
  // Buat Schema data
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  tanggalLahir: {
    type: String,
    required: true,
  },
  tempatLahir: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Mahasiswa", MahasiswaSchema);
