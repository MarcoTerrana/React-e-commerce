import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videos"
    );
    const data = await response.json();
   
    const updated = ["everything"].concat(data);
    setCategories(updated);
  };
  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category) => {
    event.preventDefault();
    props.catSelection(category);
  };

  return (
    <aside>
      <h2>Menu</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item} onClick={(event) => clicked(event, item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};