import React from "react";

const LoginForm = () => {
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center w-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              펫에버 관리자
            </h1>
            <div>
              <label
                htmlFor="email"
                className="text-left block mb-1 text-gray-600 font-semibold"
              >
                이메일
              </label>
              <input
                type="email"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-left block mb-1 text-gray-600 font-semibold"
              >
                비밀번호
              </label>
              <input
                type="password"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gray-800 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
