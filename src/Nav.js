import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory()

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
        handleShow(false);
      }
    };

    useEffect (() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
  
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="nav__content">
        <img 
        onClick={() => history.push("/")}

        className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        
        <img 
        onClick={() => history.push("/profile")}
        className="nav__avatar"
         src="avatar.jpg" alt="" />
        </div>
    </div>
  )
}

export default Nav