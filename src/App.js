import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="App">
        {authIsReady && (
          <UserContext.Provider value={{ userName, setUserName }}>
            <Router>
              <Navbar />
              <div>
                <Switch>
                  <Route exact path="/">
                    {user && <Homepage />}
                    {!user && <Redirect to="/login" />}
                  </Route>
                  <Route path="/profile">
                    <Profilepage />
                  </Route> 
                  <Route path="/signup">
                    {!user && <SignUp />}
                    {user && <Redirect to="/" />}
                  </Route>
                  <Route path="/login">
                    {!user && <Login setUid />}
                    {user && <Redirect to="/" />}
                  </Route>
                </Switch>
              </div>
            </Router>
          </UserContext.Provider>
        )}
      </div>
    </>
  );
}
export default App;
