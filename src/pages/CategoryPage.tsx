import CategoryList from "components/CategoryList";
import React from "react";

const CategoryPage = () => {
  return (
    <div>
      <h2 className="text-xl">카테고리 관리</h2>
      <CategoryList />
      <div className="mt-2 flex">
        <input
          type="text"
          className="border h-10 mr-2 flex-1 p-2 "
          placeholder="제목을 입력해주세요."
        />
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md  ">
          추가
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
