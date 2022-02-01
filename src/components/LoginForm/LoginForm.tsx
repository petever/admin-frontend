import { signInAPI } from "apis/auth";
import useInputs from "hooks/useInputs";
import React, { FormEvent } from "react";

const LoginForm = () => {
  const [loginValues, handleLoginValuesChange] = useInputs({
    email: "",
    password: "",
  });

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginValues;
    if (!email || !password) {
      return;
    }
    await signInAPI(loginValues);
  };
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center w-full">
      <form onSubmit={handleSignIn}>
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
                name="email"
                type="email"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleLoginValuesChange}
                value={loginValues.email}
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
                name="password"
                type="password"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={handleLoginValuesChange}
                value={loginValues.password}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-gray-800 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
