import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCate = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menus, setMenus] = useState(items);
  const [categories, setCategories] = useState(allCate);

  const filterItems = (category) => {
    if (category === "all") {
      setMenus(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenus(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menus} />
      </section>
    </main>
  );
}

export default App;
