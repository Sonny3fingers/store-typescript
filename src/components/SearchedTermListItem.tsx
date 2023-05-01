import React from "react";
import { Link } from "react-router-dom";

type StoreItemProps = {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  searchedTermHandler: () => void;
};

const SearchedTermListItem = ({
  title,
  author,
  imgUrl,
  id,
  searchedTermHandler,
}: StoreItemProps) => {
  return (
    <li className="flex items-center gap-1 p-1 border-b-2 border-slate-200 transition-all ease-in hover:bg-slate-200">
      <Link to={`/store/${id}`} onClick={searchedTermHandler}>
        <img src={imgUrl} alt="cover" className="w-10" />
        <div className="flex flex-col">
          <span>{title}</span>
          <span className="text-sm">{author}</span>
        </div>
      </Link>
    </li>
  );
};

export default SearchedTermListItem;
