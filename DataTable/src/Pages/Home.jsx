import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Home({ items, searchTerm, setItems }) {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("low");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/Item/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) setItems(items.filter((i) => i.id !== id));
      })
      .catch(console.error);
  };

  const categories = [
    "all",
    ...Array.from(new Set(items.map((item) => item.category).filter(Boolean))),
  ];

  const filtered = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      categoryFilter === "all" ? true : item.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      else return b.price - a.price;
    });

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h4" gutterBottom>
          Product List
        </Typography>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={categoryFilter}
            label="Category"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel id="sort-label">Sort by Price</InputLabel>
          <Select
            labelId="sort-label"
            value={sortOrder}
            label="Sort by Price"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filtered.length === 0 ? (
        <Typography>No matching products.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: 360,
                  width: 270,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mx: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ height: 180, width: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>${item.price.toFixed(2)}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {item.category || "N/A"}
                  </Typography>
                </CardContent>

                {/* Consistent styled buttons */}
                <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                  <IconButton
                    onClick={() =>
                      navigate(`/edit-item/${item.id}`, { state: { item } })
                    }
                    color="primary"
                    sx={{
                      border: "1px solid #1976d2",
                      borderRadius: 1,
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#e3f2fd",
                      },
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(item.id)}
                    color="error"
                    sx={{
                      border: "1px solid #d32f2f",
                      borderRadius: 1,
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#fdecea",
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Home;
