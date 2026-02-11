import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextProps = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext<null | UserContextProps>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<null | AuthUser>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
