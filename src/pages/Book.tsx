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
  }, [bookId]);

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
        <span className="text-slate-500 sm:text-xl mb-2">{book.genre}</span>
        <span className="text-slate-500 sm:text-xl mb-2">
          {book.pages} pages
        </span>
        <p className="text-slate-700 text-justify sm:text-xl mb-2">
          {book.description}
        </p>
        <div className="mt-auto w-full md:w-1/2">
          <CartButton id={book.id} index={book.index} />
        </div>
      </div>
    </div>
  );
};

export default Book;
