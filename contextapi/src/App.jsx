import Usercontectprovider from "./contex/Usercontectprovider";
import Profile from "./components/profile";
import Login from "./components/login";
function App() {
  return (
    <>
      <Usercontectprovider>
        <Profile />
        <Login />
      </Usercontectprovider>
    </>
  );
}

export default App;
