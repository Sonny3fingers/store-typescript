import React, {
  ReactComponentElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton";
import { useDataContext } from "../context/DataContext";

type BookProps = {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  genre: string;
  pages: number;
  description: string;
  index: number;
};

type BooksProps = BookProps[];

const Book = () => {
  const [book, setBook] = useState<BookProps | null>(null);
  const bookId = useParams();
  const { books } = useDataContext();
  let bookDetails: BookProps | null = null;
  books.forEach((item, index) => {
    if (item.id === bookId.id) {
      bookDetails = { ...item, index };
    }
  });

  useEffect(() => {
    setBook(bookDetails);
  }, []);

  // const bookDetails = books.find((item: BookProps) => item.id === bookId.id);
  // setBook(bookDetails);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const response = await fetch("../../data/items.json");
  //     const data = await response.json();

  //     if (!bookId.id) {
  //       return;
  //     } else {
  //       const id = parseInt(bookId.id);
  //       const bookDetails = data.find((item: StoreItemProps) => item.id === id);
  //       setBook(bookDetails);
  //     }
  //   };
  //   fetchBooks();
  // }, [bookId]);

  if (!book) return null;

  if (Object.keys(book).length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-12 lg:py-16 py-8">
      <img
        src={book.imgUrl}
        alt="book cover"
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      />
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-xl lg:text-3xl text-slate-500">{book.title}</h3>
        <h4 className="text-lg lg:text-xl mb-4">by {book.author}</h4>
        <span>genre: ?</span>
        <span>pages: ?</span>
        <p>description: ?</p>
        <div className="mt-auto w-full md:w-1/2">
          <CartButton id={book.id} index={book.index} />
        </div>
      </div>
    </div>
  );
};

export default Book;
