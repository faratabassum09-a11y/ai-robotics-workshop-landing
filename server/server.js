import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Enquiry from "./Enquiry.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || ""

app.use(cors())
app.use(express.json())

let dbConnected = false

// MongoDB connection is optional — the API still works without it,
// it just won't persist enquiries to a database.
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      dbConnected = true
      console.log("MongoDB connected")
    })
    .catch((err) => {
      console.error("MongoDB connection failed, continuing without persistence:", err.message)
    })
} else {
  console.log("No MONGODB_URI set — running without database persistence")
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[0-9]{10}$/

app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone } = req.body || {}

  // Validate required fields
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ success: false, message: "Name is required." })
  }
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ success: false, message: "A valid email is required." })
  }
  if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone.trim())) {
    return res.status(400).json({ success: false, message: "A valid 10-digit phone number is required." })
  }

  const enquiryData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
  }

  try {
    if (dbConnected) {
      await Enquiry.create(enquiryData)
    } else {
      // Without a database connection, log it so the request still
      // succeeds and the flow can be demoed end-to-end.
      console.log("New enquiry (not persisted, no DB configured):", enquiryData)
    }

    return res.status(201).json({
      success: true,
      message: "Enquiry received successfully.",
    })
  } catch (err) {
    console.error("Error saving enquiry:", err.message)
    return res.status(500).json({
      success: false,
      message: "Could not process the enquiry right now. Please try again.",
    })
  }
})

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", dbConnected })
})

app.listen(PORT, () => {
  console.log(`Workshop API listening on port ${PORT}`)
})
