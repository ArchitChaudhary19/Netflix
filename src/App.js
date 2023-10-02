import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import  { Toaster } from 'react-hot-toast';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        
        dispatch(logout())       // Logged out
      }
    })

    return unsubscribe 
    // eslint-disable-next-line
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (
          <Switch>
            <Route  path ='/profile'>
              <ProfileScreen />
            </Route>
          <Route exact path="/">
          <HomeScreen />
          </Route>
        </Switch>
        )}
    </Router>
    <Toaster/>
    </div>
  );
}

export default App;