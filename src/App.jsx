import UserContextProvider from "./appContext/UserContextProvider";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
