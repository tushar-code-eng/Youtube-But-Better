import React, { useEffect, useState } from "react";
import Cards from "../../Cards/Cards";
import "./Home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    try {
      const fetchVideos = async () => {
        const res = await axios.get(`/api/videos/${type}`,{
          withCredentials:true, 
        });
        setVideos(res.data);
      };
      fetchVideos();
    } catch (err) {
      console.log("Error: ", err);
    }
  }, [type]);

  return (
    <div className="mainContainer">
      {videos.map((video) => (
        <Cards key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Home;
