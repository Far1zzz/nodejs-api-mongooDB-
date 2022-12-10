const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
    max: 45,
  },
  email: {
    type: String,
    require: true,
    max: 45,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 25,
  },
});
module.exports = mongoose.model("User", UserSchema);
