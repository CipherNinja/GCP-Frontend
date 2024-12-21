// server/routes/api.js

const express = require('express');
const router = express.Router(); 

// Importing the models 
const FAQModel = require("../models/faq.models");
const ContactUsModel = require("../models/contactus.models");
const ProductModel = require("../models/product.models");

// Importing middlewares
const upload = require("../middlewares/multer.middleware");

// GET API to fetch all FAQs with visibility true
// Responds with a list of FAQ queries and answers
router.get('/message', async(req, res) => {
  try {
    
    const faqs = await FAQModel.findAll({
      where: {
        visibility: true,  
      },
      attributes: ['query', 'answer'], 
    });

    // If no FAQs are found
    if (faqs.length === 0) {
      return res.status(404).json({ message: "No FAQs with visibility true is found." });
    }

    res.status(200).json({ faqs: faqs });
  } catch (err) {
    console.error("Error fetching visible FAQs:", err);
    res.status(500).json({ error: "Failed to fetch visible FAQs" });
  } 
});

// POST API to update an existing FAQ entry based on the provided query
router.post('/message', async(req,res) => {
  const { query, answer, visibility } = req.body;

  if (!query || !answer || !visibility ) {
    return res.status(400).json({ error: "Query, answer, and visibility are required" });
  }

  try {
    
    const faq = await FAQModel.findOne({ where: { query } });

    if (!faq) {
      return res.status(404).json({ message: "FAQ not found for the provided query" });
    }

    faq.answer = answer;
    faq.visibility = visibility;

    await faq.save();

    res.status(200).json({ message: "FAQ updated successfully"});
  } catch (err) {
    console.error("Error updating FAQ:", err);
    res.status(500).json({ error: "Failed to update FAQ" });
  }
});

// POST API to submit a new FAQ
router.post("/submit-faq", async (req, res) => {
  const { query } = req.body;

  if (!query) {
      return res.status(400).json({ error: "Query is required" }); 
  }

  try {
      await FAQModel.create({ query });
      res.status(201).json({ message: "FAQ submitted successfully"});
  } catch (err) {
      console.error("Error saving FAQ:", err);
      res.status(500).json({ error: "Failed to save FAQ" }); 
  }
});

// POST API to submit contact-us details
router.post("/contactus", async (req, res) => {

  const {name, email, phone, country, message} = req.body;

  // Validate all fields are required
  if (!name || !email || !phone || !country || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  
  // Validate message length
  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters long." });
  }

  // Validate email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // Validate phone number
  const phoneRegex = /^\d{1,3}\d{10}$/;
  phoneNumber = phone.replace(/[\s\-\(\)]/g, "");
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  try {
    // Save to the database
    await ContactUsModel.create({
        name, email, phone, country, message
    });

    return res.status(200).json({
        message: "Contact details submitted successfully.",
    });
  } catch (error) {
    console.error("Error saving contact details:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

});

// POST API to submit product details
router.post('/product', upload.array('images'), async (req, res) => {

    const { name, title, stock, mrp, original_price, categories } = req.body;

    if (!name || !title || !stock || !mrp || !original_price || !categories) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const parsedCategories = typeof categories === 'string' ? JSON.parse(categories) : categories;

    const imagePaths = req.files.map(file => file.path);
  try {
    await ProductModel.create({
      name, title, stock, mrp, original_price, 
      categories : parsedCategories,
      images: imagePaths,
    });

    res.status(201).json({ message: 'Product created successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// GET API to fetch all product details
router.get('/product/:id', async(req, res)=>{

  const { id } = req.params;

  try {
    const product = await ProductModel.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ product });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
})

module.exports = router;
