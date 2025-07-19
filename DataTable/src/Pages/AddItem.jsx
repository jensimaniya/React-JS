import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AddItem = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    category: "", // <-- નવું ફીલ્ડ ઉમેર્યું
  });

  const categories = ["Food", "Beverages", "Snacks", "Desserts"]; // તમારી જરૂર મુજબ કેટેગરીઝ અહીં બદલો

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/Item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: formData.image,
          name: formData.name,
          price: parseFloat(formData.price),
          category: formData.category, // સર્વરમાં પણ મોકલવું
        }),
      });

      if (res.ok) {
        alert("✅ Product added successfully!");
        setFormData({ image: "", name: "", price: "", category: "" });
      } else {
        alert("❌ Failed to add product.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error adding product.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 5,
          background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
          boxShadow: "0 4px 30px rgba(102, 166, 255, 0.4)",
          backdropFilter: "blur(8.5px)",
          WebkitBackdropFilter: "blur(8.5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: "bold", mb: 4 }}
        >
          🛒 Add New Product
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="📷 Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            variant="filled"
            fullWidth
            required
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 2,
              "& .MuiFilledInput-root": { borderRadius: 2 },
            }}
          />

          <TextField
            label="🛍️ Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="filled"
            fullWidth
            required
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 2,
              "& .MuiFilledInput-root": { borderRadius: 2 },
            }}
          />

          <TextField
            label="💰 Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            variant="filled"
            fullWidth
            required
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 2,
              "& .MuiFilledInput-root": { borderRadius: 2 },
            }}
          />

          {/* Category dropdown */}
          <FormControl
            variant="filled"
            fullWidth
            required
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 2,
              "& .MuiFilledInput-root": { borderRadius: 2 },
            }}
          >
            <InputLabel id="category-label">📂 Category</InputLabel>
            <Select
              labelId="category-label"
              name="category"
              value={formData.category}
              onChange={handleChange}
              label="Category"
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              py: 1.5,
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(255,154,0,1) 100%)",
              boxShadow: "0 4px 15px 0 rgba(255,0,150,0.75)",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(255,154,0,1) 0%, rgba(255,0,150,1) 100%)",
              },
            }}
          >
            ➕ Add Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddItem;
