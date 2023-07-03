import { AuthContext } from "./auth-context";

import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext 내부에 반드시 필요");
  }

  return context;
};
