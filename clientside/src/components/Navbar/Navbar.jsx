import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Uploadvideos from "../uploadVideos/uploadVideos.jsx";
import Moreinfo from '../MoreInfo/Moreinfo.jsx'
import SearchIcon from '@mui/icons-material/Search';

import VideoCallIcon from "@mui/icons-material/VideoCall";

import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser); // ---------------redux

  const [moreinfo,setMoreinfo] = useState(false)
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("")

  return (
    <>
      <div className="navbar">
        <div className="searchcontainer">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={(e) => setQ(e.target.value)}
          />
          <button
            className="searchbutton"
            onClick={() => navigate(`/search?q=${q}`)}
          >
            <SearchIcon />
          </button>
        </div>
        {currentUser ? (
          <div className="currentusercontainer">
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <VideoCallIcon />
            </button>
            <div className="moreinfo" onClick={()=>{setMoreinfo(!moreinfo)}}>
              <div className="avatar">
                <img src={currentUser.img} alt="" />
              </div>
              <div className="username">{currentUser.name}</div>
            </div>
            { moreinfo && <Moreinfo  />}
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
