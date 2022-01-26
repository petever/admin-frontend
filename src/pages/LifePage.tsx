import React from "react";
import { Link } from "react-router-dom";

const LifePage = () => {
  return (
    <div>
      <h2 className="text-xl">라이프</h2>
      <div className="flex flex-row-reverse  text-white mb-4">
        <Link to="/write/life" className="bg-slate-600 p-2 rounded-md">
          글쓰기
        </Link>
      </div>
      <div className="flex bg-slate-600 rounded-md p-2 text-center text-white">
        <div className="flex-1">번호</div>
        <div className="flex-1">그룹</div>
        <div className="flex-1">제목</div>
        <div className="flex-1">등록일</div>
        <div className="flex-1">작성자</div>
        <div className="flex-1"></div>
      </div>
      <div className="flex p-2 text-center border-b-2">
        <div className="flex-1">1</div>
        <div className="flex-1">라이프</div>
        <div className="flex-1 text-left">가나다라가나다라가나다라</div>
        <div className="flex-1">2021-2-1</div>
        <div className="flex-1">관리자</div>
        <div className="flex-1">
          <button type="button">수정</button>
          <button type="button">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default LifePage;
