import {  useEffect, useState,  } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./userContext";

interface userData {
  name: string;
}

interface Props {
  children: ReactNode;
}



export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    const fetch = () => {
      setUserData({ name: "abhi" });
    };
    fetch();
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
