import SearchBar from "./SearchBar";
import CompagnieData from "./data.json"

export default function Compagnies() {
 

  
  return (
    <div className="container">
      <h1>Search Companies 🇿🇦</h1>
     <SearchBar placeholder="Search By Suburb" data={CompagnieData} />
    </div>
  );
}
