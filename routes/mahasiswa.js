// (5) Buat router Mahasiswa
const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");
const response = require("../config/response");

// import verify teken
const verifyToken = require("../config/verifyToken");

// Create
router.post("/", verifyToken, async (req, res) => {
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
    // res.json(mahasiswa);
    response(201, mahasiswa, "input data success", res);
    // response(201, mahasiswa, `Success`, res) +
  } catch (error) {
    res.status(400).json({ message: error.message });
    // res.json({ message: error });
  }
});

// Read Data + verify token
router.get("/", verifyToken, async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    // res.json(mahasiswa);
    response(200, mahasiswa, "get data success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(404).json({ message: error.message });
  }
});

// Update Data
router.put("/:mahasiswaId", verifyToken, async (req, res) => {
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
    // res.json(mahasiswa);
    response(200, mahasiswa, "update data success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(400).json({ message: error.message });
  }
});

// delete data
router.delete("/:mahasiswaId", verifyToken, async (req, res) => {
  try {
    // delete Data
    const mahasiswa = await Mahasiswa.deleteOne({
      _id: req.params.mahasiswaId,
    });
    // response
    // res.json(mahasiswa);
    response(200, mahasiswa, "delete data success", res);
  } catch (error) {
    // res.json({ message: error });
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
