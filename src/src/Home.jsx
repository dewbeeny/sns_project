// Home.jsx
import React, { useEffect } from "react";
import API from "./apis/index";
const Home = () => {
  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const res = await API.get("/feed");
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Home;
