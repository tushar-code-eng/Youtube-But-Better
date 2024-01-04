import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Uploadvideos from "../uploadVideos/uploadVideos.jsx";

import VideoCallIcon from "@mui/icons-material/VideoCall";

import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const Navbar = () => {
  const navigate =useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser); // ---------------redux

  const [open, setOpen] = useState(false)
  const [q,setQ] = useState("")

  return (
    <>
      <div className="navbar">
        <div className="searchcontainer">
          <input type="text" id="search-input" placeholder="Search..." onChange={(e)=> setQ(e.target.value)}/>
          <button className="searchbutton" onClick={()=>navigate(`/search?q=${q}`)}>Search</button>
        </div>
        {currentUser ? (
          <div className="currentusercontainer">
            <button onClick={()=>{setOpen(true)}}><VideoCallIcon /></button>
            <div className="avatar"></div>
            <div className="username">{currentUser.name}</div>
          </div>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <button className="signbtn">
              {" "}
              <SensorOccupiedIcon /> SignIn
            </button>
          </Link>
        )}
      </div>
      {open && <Uploadvideos setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
