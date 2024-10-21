"use strict";

const mongoose = require("mongoose");
mongoose.promise = global.Promise;
const Schema = mongoose.Schema;

let MachineRecord = new Schema({
  relatedTreatmentSelection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TreatmentSelections",
  },
  relatedAppointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointments",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  currentQty: {
    type: Number,
  },
  actualQty: {
    type: Number,
  },
  finalQty: {
    type: Number,
  },
  relatedStock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stocks",
  },

  relatedMachine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FixedAssets",
  },

  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  type: {
    type: String,
    enum: ["Usage"],
  },
  fromAmount: {
    type: Number,
    default: 0,
  },
  toAmount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("MachineRecord", MachineRecord);

//Author: Kyaw Zaw Lwin
