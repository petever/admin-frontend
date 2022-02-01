import Axios from "lib/Axios";
import { signInRequestBody } from "../types/auth";

export const signInAPI = (loginInfo: signInRequestBody) => {
  Axios.post("/login", loginInfo);
};
