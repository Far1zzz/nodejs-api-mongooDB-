// buat router Dosen
const express = require("express");
const router = express.Router();
const Dosen = require("../models/Dosen");

// create
router.post("/", async (req, res) => {
  // tampung input mahasiswa
  const dosenPost = new Dosen({
    nama: req.body.nama,
    alamat: req.body.alamat,
  });
  try {
    // simpan data
    const dosen = await dosenPost.save();
    // response
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
