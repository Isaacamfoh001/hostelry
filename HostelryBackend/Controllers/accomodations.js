const mongoose = require("mongoose");
const { Accomodation } = require("../Models/accomodation");
// const {createError} = require("../utils/error");
// const {verifyUser, verifyToken, verifyAdmin} = require("../utils/verifyToken");

const postAccomodation = async (req, res, next) => {
  const newAccomodation = new Accomodation(req.body);
  try {
    const savedAccomodation = await newAccomodation.save();
    res.status(200).json(savedAccomodation);
  } catch (error) {
    next(error);
  }
};

const updateAccomodation = async (req, res, next) => {
  try {
    const updatedAccomodation = await Accomodation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAccomodation);
  } catch (error) {
    next(error);
  }
};

const deleteAccomodation = async (req, res, next) => {
  try {
    await Accomodation.findByIdAndDelete(req.params.id);
    res.status(200).json("Accomodation has been deleted successfully");
  } catch (error) {
    next(error);
  }
};

const getAccomodation = async (req, res, next) => {
  try {
    const accomodation = await Accomodation.findById(req.params.id);
    res.status(200).json(accomodation);
  } catch (error) {
    next(error);
  }
};

const getAccomodations = async (req, res, next) => {
  const { min, max, ...otherPossibleQueries } = req.query;

  try {
    const accomodations = await Accomodation.find({
      ...otherPossibleQueries,
      price: { $gt: min || 150, $lt: max || 200000 },
    }).limit(req.query.limit);
    res.status(200).json(accomodations);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAccomodation,
  getAccomodation,
  updateAccomodation,
  deleteAccomodation,
  getAccomodations,
};
