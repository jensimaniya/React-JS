import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function EditItem({ items, setItems }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initial = state?.item;
  const [formData, setFormData] = useState(initial || {});

  useEffect(() => {
    if (!initial) navigate("/");
  }, [initial, navigate]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/Item/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const updated = await res.json();
      setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
      alert("✅ Updated!");
      navigate("/");
    } else alert("❌ Update failed");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <TextField
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default EditItem;
