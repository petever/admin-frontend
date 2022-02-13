import CategoryItem from "components/CategoryItem";
import { useState } from "react";
const CategoryList = () => {
  return (
    <ul className="w-full mt-2 bg-slate-100 rounded border p-2 h-5/6">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ul>
  );
};

export { CategoryList };
