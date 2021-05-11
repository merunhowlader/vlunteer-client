import logo from './logo.svg';
import './App.css';
import Homenav from './Components/Homenav/Homenav';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

//
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import RegEventList from './Components/RegEventList/RegEventList';
import VolunteerRegList from './Components/VolunteerRegList/VolunteerRegList';
import Admin from './Components/Admin/Admin';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext=createContext();

function App() {
 
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        
    <Router>

      <Switch>

        <Route path="/" exact>
            <Main></Main>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/register">
             <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/events/">
          <RegEventList></RegEventList>
        </PrivateRoute>
        <Route path="/admin/">
          <Admin></Admin>
        </Route>
        <PrivateRoute path="/volunteerlist/">
          <VolunteerRegList></VolunteerRegList>
        </PrivateRoute>
        <PrivateRoute path="/addevent">
          <VolunteerRegList></VolunteerRegList>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        

      </Switch>

    </Router>
     
     
     
     
     
    </UserContext.Provider>
  );
}

export default App;
