import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";
import InputField from "./InputField";

interface Category {
  id: string;
  name: string;
}

export default function Compagnies() {
  const categories: Category[] = getCategories();
  return (
    <div className="container">
      <h1>Search Companies 🇿🇦</h1>
        <InputField/>
      {/* <ul className="categories">
        {categories.map((cat) => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : undefined
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul> */}
     
    </div>
  );
}
