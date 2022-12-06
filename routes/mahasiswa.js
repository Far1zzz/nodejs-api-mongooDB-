// (5) Buat router Mahasiswa
const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");

// Create
router.post("/", async (req, res) => {
  // tampung input mahasiswa
  const mahasiswaPost = new Mahasiswa({
    nama: req.body.nama,
    alamat: req.body.alamat,
    tanggalLahir: req.body.tanggalLahir,
    tempatLahir: req.body.tempatLahir,
  });

  try {
    // simpan data
    const mahasiswa = await mahasiswaPost.save();
    // response
    res.json(mahasiswa);
    // response(201, mahasiswa, `Success`, res) +
  } catch (error) {
    // res.status(401).json({message: error.message})
    res.json({ message: error });
  }
});

// Read Data
router.get("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update Data
router.put("/:mahasiswaId", async (req, res) => {
  // tampung input mahasiswa
  const data = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    tanggalLahir: req.body.tanggalLahir,
    tempatLahir: req.body.tempatLahir,
  };

  try {
    //update data
    const mahasiswa = await Mahasiswa.updateOne(
      { _id: req.params.mahasiswaId },
      data
    );
    // response
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete data
router.delete("/:mahasiswaId", async (req, res) => {
  try {
    // delete Data
    const mahasiswa = await Mahasiswa.deleteOne({
      _id: req.params.mahasiswaId,
    });
    // response
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
