import React, { ChangeEvent, useEffect, useState } from "react";
import SearchedTermListItem from "./SearchedTermListItem";

type StoreItemProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  index: number;
};

const Header = () => {
  const [books, setBooks] = useState<StoreItemProps[]>([]);
  const [searchedTermBooks, setSearchedTermBooks] = useState<
    StoreItemProps[] | null
  >(null);
  const [searchedTerm, setSearchedTerm] = useState<string | null>(null);
  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedTerm(e.target.value);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("../../data/items.json");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!searchedTerm) {
        setSearchedTermBooks(null);
        return;
      }
      const results = books.filter(
        (item) =>
          item.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
          item.author.toLowerCase().includes(searchedTerm.toLowerCase())
      );
      setSearchedTermBooks([...results]);
    }, 500);
    // clean up
    return () => {
      clearTimeout(identifier);
    };
  }, [searchedTerm]);

  return (
    <div className="max-w-[1700px] flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center top-16 left-0 sticky bg-blue-100 mx-auto px-4 py-4 z-20">
      <img src="/images/icons/logo.png" alt="logo" />
      <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col relative">
        <form className="w-full flex">
          <input
            type="text"
            className="flex-1 border-none outline-none px-2 py-1"
            onChange={searchInputChangeHandler}
          />
          <button className="w-6 h-auto bg-white bg-[url('../../images/icons/searchIcon.png')] bg-contain bg-no-repeat bg-center border-l-2 border-blue-200 p-1"></button>
        </form>
        {searchedTermBooks && (
          <ul className="w-full absolute top-10 right-0 bg-white max-h-[500px] overflow-y-auto">
            {searchedTermBooks?.map((item) => (
              <SearchedTermListItem key={item.id} {...item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
