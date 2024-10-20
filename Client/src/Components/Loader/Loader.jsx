import React from 'react';
import './Loader.css'; // Importing the CSS file for styling
import UserContext from '../context/UserProvider';
import { useContext } from "react";

const Loader = () => {

    const { loader} = useContext(UserContext);
    return (
        
        <div className="loader" style={{display: loader ? "block" : "none"}}></div>
        
    );
};

export default Loader;
