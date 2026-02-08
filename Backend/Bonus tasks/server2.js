// server2.js
const express = require("express");
const listingsRoutes = require("./routes/listings");

const app = express();
app.use(express.json());

// versioned routes
app.use("/api/v1/listings", listingsRoutes); // current version API v1
//in the future we can add v2:
// app.use("/api/v2/listings", listingsRoutesV2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const API_URL = "http://localhost:3000/api/v1/listings";
