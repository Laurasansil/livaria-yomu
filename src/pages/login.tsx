import { NextPage } from "next";
import Login from "../components/Login";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

const LoginPage: NextPage = () => {
  return (
    <RequireAuth>
      <Login />
    </RequireAuth>
  );
};

export default LoginPage;
