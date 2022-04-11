import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
     <Link to="/product" className="link">Product Page</Link>
     <Link to="/categories" className="link">Categories Page</Link>
  </div>
  </>
)
}

export default Home;
