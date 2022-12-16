import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  userEmail: null,
  token: null,
  logIn: () => {},
  logOut: () => {},
});

// const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  function logIn(loginUserData) {
    // setUser({ isGuestUser: false, name: username });
    const res = await axios.post("nurse/loginNurse", loginUserData);

    if (res.data.success) {
      setUserEmail(localStorage.setItem("user", email));
      setUserToken(localStorage.setItem("token", res.data.data));
      history.push("/Dashboard");
    }
  }
  function logOut() {
    setUser(USER);
  }
  return (
    <userContext.Provider value={{ userEmail, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { userEmail, logIn, logOut } = useContext(userContext);

  return { userEmail, logIn, logOut };
}