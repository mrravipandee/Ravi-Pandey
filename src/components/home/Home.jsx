import React, { useState, useEffect } from "react";
import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
// require("dotenv").config();

const Home = () => {
  const [username, setUsername] = useState("mrravipandee");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = `https://api.github.com/users/${username}`;

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchData = () => {
    fetch(apiUrl, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY}`, // Replace with your actual GitHub API key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setUserData(null);
        setError("User not found");
      });
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  // Home container code 
  return (
    <section className="home container" id="home">
      <div className="intro">
        {userData && (
          <img
            src={userData.avatar_url}
            alt="GitHub Profile"
            className="home_img"
          />
        )}
        <h1 className="home_name">
          {userData ? userData.name : "Ravi Pandey"}
        </h1>
        <span className="home_education">
          {userData ? userData.bio : "MERN Stack Enthusiast | Tech Learner & Innovator"}
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
