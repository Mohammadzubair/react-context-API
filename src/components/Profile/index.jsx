import { useUserContext } from "../../hooks/useUserContext";

export const Profile = () => {
  const { user } = useUserContext();
  if (user) {
    return <h4>Welcome {user.userName}</h4>;
  } else {
    return <h4>Please login first</h4>;
  }
};
