import StoreItem from "../components/StoreItem";
import { useDataContext } from "../context/DataContext";

const Store = () => {
  const { books } = useDataContext();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8 py-10 sm:flex-row sm:flex-wrap">
        {books.map((item, index) => (
          <StoreItem key={item.id} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;
