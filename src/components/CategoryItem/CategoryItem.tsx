import React from "react";

const CategoryItem = () => {
  return (
    <li className="bg-white border p-2 flex">
      <span className="flex-1">카테고리1</span>
      {/* <input type="text" className="border flex-1" /> */}
      <div>
        <button className="mx-2 px-2 border text-sm text-gray-400 rounded">
          추가
        </button>
        <button className="mx-2 px-2 border text-sm text-gray-400 rounded">
          수정
        </button>
      </div>
    </li>
  );
};

export { CategoryItem };
