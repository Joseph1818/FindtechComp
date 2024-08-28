import { getCategories } from "../api";
import InputField from "./InputField";

// interface Category {
//   id: string;
//   name: string;
// }

export default function Compagnies() {
  // const categories: Category[] = getCategories();
  return (
    <div className="container">
      <h1>Search Companies 🇿🇦</h1>
        <InputField/>
     
    </div>
  );
}
