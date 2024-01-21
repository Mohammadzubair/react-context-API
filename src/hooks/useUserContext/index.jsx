import { useContext } from "react";
import UserContext from "../../appContext/UserContext";

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUserContext must be called with a user context");
  } else {
    return user;
  }
};
