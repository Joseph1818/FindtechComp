import SearchBar from "./SearchBar";
import Bookdata from "./data.json"


// interface Category {
//   id: string;
//   name: string;
// }

export default function Compagnies() {
  // const categories: Category[] = getCategories();

  
  return (
    <div className="container">
      <h1>Search Companies 🇿🇦</h1>
     <SearchBar placeholder="Search By Suburb" data={Bookdata} />
    </div>
  );
}
