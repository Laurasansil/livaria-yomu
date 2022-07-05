import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FAKE_BACKEND_API,
});

export default api;

export const login = async (email: string, password: string) => {
  const { data: user } = await api.post("/login", { email, password });
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};
export const logout = async () => {
  await api.post("/logout");
};
