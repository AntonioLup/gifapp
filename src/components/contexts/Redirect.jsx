import React, { createContext, useState } from "react";
import LoginPage from "../../pages/Auth/LoginPage";
import ProtectedRouter from "../../pages/Auth/ProtectedRouter";

export const UserContext = createContext();
function Redirect() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProtectedRouter />
      <LoginPage />
    </UserContext.Provider>
  );
}

export default Redirect;
