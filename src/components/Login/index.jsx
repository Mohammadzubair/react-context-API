import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
    setUserName("");
    setPassword("");
  };

  return (
    <form>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button
        disabled={!userName || !password}
        type="submit"
        onClick={handleSubmit}
        style={{ cursor: !userName || !password ? "not-allowed" : "pointer" }}
      >
        Submit
      </button>
      <br />
    </form>
  );
};
