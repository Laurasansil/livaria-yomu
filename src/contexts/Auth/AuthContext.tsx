import { createContext } from "react";
import { User } from "../../types/user";

//token local storage

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
