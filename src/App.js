import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SelectRide from './Components/SelectRide/SelectRide';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="main-bg">
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
          
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <SelectRide></SelectRide>
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
    </div>
  );
}

export default App;
