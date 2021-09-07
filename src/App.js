import './App.css';
import React, { createContext, useState, } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
export const UserContext = createContext();
function App() {
  const [data, setData] = useState();
  return (
    <UserContext.Provider value={[data, setData]} className="App">
      <h1>Email:{data?.email}</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/book">
            <Book/>
          </PrivateRouter>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
