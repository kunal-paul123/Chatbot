import axios from "axios";

export const loginUser = async (email, password) => {
  const res = await axios.post("/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/auth-status", { withCredentials: true });

  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }

  const data = res.data;
  return data;
};
