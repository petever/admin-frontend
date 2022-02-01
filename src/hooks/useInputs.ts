import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
} from "react";

type ReturnTypes = [
  any,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void
];

function useInputs<T>(initialForm: T): ReturnTypes {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;

// import { useState, useCallback, Dispatch, SetStateAction } from "react";

// function useInputs<T>(
//   initialForm: T
// ): [
//   T,
//   Dispatch<SetStateAction<T>>,
//   (event: React.ChangeEvent<HTMLInputElement>) => void
// ] {
//   const [form, setForm] = useState<typeof initialForm>(initialForm);
//   const onChange = useCallback((event) => {
//     const { name, value } = event.target;
//     setForm((form) => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
//   return [form, onChange, reset];
// }

// export default useInputs;
