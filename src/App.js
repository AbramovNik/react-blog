import React from 'react';
import {  BrowserRouter , Route, Switch } from "react-router-dom";
import  SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { Navbar } from './components/common/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />   
    <div className = 'container'>
            <Switch>
              <Route path="/signin" component={SigninPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/404" component={() => <div>Not found</div>} />
            </Switch>
    </div>
    </BrowserRouter>
    );
}

export default App;
