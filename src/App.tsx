import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Book from "./pages/Book";
import { CartProvider } from "./context/CartContext";
import { useDataContext } from "./context/DataContext";
import Spinner from "./components/Spinner";

interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  genre: string;
  pages: number;
  description: string;
}

type BooksProps = BookProps[];

interface FirestoreBook {
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  genre: string;
  pages: number;
  description: string;
}

type DataProps = BookProps[];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { books, addBooksToContextHandler } = useDataContext();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // get reference
        const booksRef = collection(db, "books");
        // create query
        const q = query(booksRef);
        // execute query
        const querySnap = await getDocs(q);

        let books: DataProps = [];

        querySnap.forEach((doc) => {
          const firestoreBook = doc.data() as FirestoreBook;
          const book: BookProps = {
            id: doc.id,
            title: firestoreBook.title,
            author: firestoreBook.author,
            price: firestoreBook.price,
            imgUrl: firestoreBook.imgUrl,
            genre: firestoreBook.genre,
            pages: firestoreBook.pages,
            description: firestoreBook.description,
          };

          return books.push(book);
        });
        addBooksToContextHandler(books);
        setIsLoading(false);
      } catch (error) {
        toast.error("Could not fetch books");
      }
    };

    fetchBooks();
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <Header />
      <div className="px-4 bg-slate-100 max-w-[1700px] min-h-[590px] mx-auto">
        {isLoading ? (
          <Spinner />
        ) : books && books.length > 0 ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/store/:id" element={<Book />} />
          </Routes>
        ) : (
          <p>There are no books in database.</p>
        )}
      </div>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
