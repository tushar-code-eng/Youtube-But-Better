import React, { useEffect, useState } from "react";
import Cards from "../../Cards/Cards";
import "./Home.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = ({ type }) => {
  const navigate = useNavigate()

  const [videos, setVideos] = useState([]);
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser)

  if(!currentUser){
    navigate(`/signin`)
  }

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
