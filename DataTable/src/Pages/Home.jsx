import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Home({ items, searchTerm, setItems }) {
  const navigate = useNavigate();

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/Item/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) setItems(items.filter((i) => i.id !== id));
      })
      .catch(console.error);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      {filtered.length === 0 ? (
        <Typography>No matching products.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  src={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>${item.price.toFixed(2)}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() =>
                      navigate(`/edit-item/${item.id}`, { state: { item } })
                    }
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(item.id)}
                    color="error"
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
