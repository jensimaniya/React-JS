// Home.jsx
import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Table,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const API_URL = "http://localhost:3000/rooms";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", type: "", price: "" });
  const [editing, setEditing] = useState(false);

  const fetchRooms = () => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setRooms)
      .catch(console.error);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.price)
      return alert("Please fill all fields");
    const method = editing ? "PUT" : "POST";
    const url = editing ? `${API_URL}/${form.id}` : API_URL;
    const payload = {
      name: form.name,
      type: form.type,
      price: Number(form.price),
    };

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setRooms((rs) =>
          editing ? rs.map((r) => (r.id === data.id ? data : r)) : [...rs, data]
        );
        setEditing(false);
        setForm({ id: null, name: "", type: "", price: "" });
      })
      .catch(console.error);
  };

  const handleEdit = (room) => {
    setForm(room);
    setEditing(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure?")) return;
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setRooms((rs) => rs.filter((r) => r.id !== id)))
      .catch(console.error);
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Room Management</h1>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <Form.Group>
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter room name"
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="">Select type</option>
                    <option>Relax</option>
                    <option>Suite</option>
                    <option>Simple</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Label>Price (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </Col>
              <Col md="auto" className="d-flex align-items-end">
                <Button type="submit" variant={editing ? "warning" : "primary"}>
                  {editing ? "Update" : "Add"} Room
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted py-4">
                No rooms yet.
              </td>
            </tr>
          ) : (
            rooms.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.type}</td>
                <td>₹{r.price}</td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => handleEdit(r)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(r.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
