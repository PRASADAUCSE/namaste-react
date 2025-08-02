// // server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors({
    origin : 
})); // Allow all frontend origins

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching Swiggy data:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
