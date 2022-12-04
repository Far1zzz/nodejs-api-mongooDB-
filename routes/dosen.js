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

// read datanya
router.get("/", async (req, res) => {
  try {
    const dosen = await Dosen.find();
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

//  update Datanya
router.put("/:dosenId", async (req, res) => {
  // tampunn input data dosenn
  const data = {
    nama: req.body.nama,
    alamat: req.body.alamat,
  };

  try {
    // update datanya
    const dosen = await Dosen.updateOne(
      {
        _id: req.params.dosenId,
      },
      data
    );
    // response nya
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete data
router.delete("/:dosenId", async (req, res) => {
  try {
    // delete datanya
    const dosen = await Dosen.deleteOne({
      _id: req.params.dosenId,
    });
    // response
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
