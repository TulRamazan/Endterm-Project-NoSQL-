const mongoose = require("mongoose");
const Listing = require("./models/Listing"); // my model

async function createListingWithTransaction(data) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // 1. Adding new listing
    const newListing = await Listing.create([data], { session });

    // 2. We can add another operation (e.g, updating a new document)
    // await AnotherModel.updateOne({ ... }, { ... }, { session });

    await session.commitTransaction(); // accepting all changes
    session.endSession();
    return newListing[0];
  } catch (error) {
    await session.abortTransaction(); // canceling all changes by appearing an error
    session.endSession();
    console.error("Transaction failed:", error);
    throw error;
  }
}

