import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  // 🔹 Fetch Books
  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, "books"));
      const booksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  // 🔹 Add Book
  const addBook = async (e) => {
    e.preventDefault();
    if (!name || !author || !price) return;

    await addDoc(collection(db, "books"), {
      name,
      author,
      price,
    });

    setName("");
    setAuthor("");
    setPrice("");

    // Refresh
    const querySnapshot = await getDocs(collection(db, "books"));
    setBooks(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // 🔹 Delete Book
  const deleteBook = async (id) => {
    await deleteDoc(doc(db, "books", id));
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2> Manager</h2>

      <form onSubmit={addBook}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add </button>
      </form>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} by {book.author} — ${book.price}
            <button onClick={() => deleteBook(book.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
