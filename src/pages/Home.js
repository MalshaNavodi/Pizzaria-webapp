import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return(
  <div className="Home" style = {{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
        <h1> Pizzaria</h1>
        <h2> PIZZA TO FIT ANY TASTE</h2>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
    </div>
    </div>
  );
}

export default Home;
