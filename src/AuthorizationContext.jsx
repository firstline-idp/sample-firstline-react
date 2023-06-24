import { useAuthentication } from "@first-line/firstline-react";
import { createContext } from "react";

const AuthorizationContext = createContext();
export default AuthorizationContext;

export const AuthorizationProvider = ({ children }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    getAccessToken,
    isLoading,
    user,
    doRefresh,
  } = useAuthentication();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return <div>Loading...</div>;
  }

  return (
    <AuthorizationContext.Provider value={{ getAccessToken, user, doRefresh }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
