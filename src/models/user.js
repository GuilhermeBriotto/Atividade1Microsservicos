"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", schema);
