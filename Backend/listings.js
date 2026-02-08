const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

/* ===== Schema ===== */
const ListingSchema = new mongoose.Schema({
  name: String,
  amenities: [String],
  price: Number
});

const Listing = mongoose.model("Listing", ListingSchema);

/* ===== CREATE ===== */
router.post("/", async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ===== READ ===== */
router.get("/", async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

/* ===== UPDATE ===== */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ===== DELETE ===== */
router.delete("/:id", async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;

