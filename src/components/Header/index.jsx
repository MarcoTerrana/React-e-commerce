import "./styles.css";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    setSearch(event.target.value);
  };

  return (
    <header>
      <img src= "" alt="React ecommerce" />
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};