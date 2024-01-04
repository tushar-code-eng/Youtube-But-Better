import React from "react";
import "./Sidebar.scss";
import ytic from "../photos/youtubeicon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const Sidebar = () => {

  const currentUser = useSelector((state) => state.user.currentUser); // ---------------redux

  return (<>
    <div className="sidebarr">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
          <img src={ytic} alt="" />
          <p>MyYouTube</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>       
      <div className="items">
        <HomeRoundedIcon />
        Home
      </div>
      </Link>
      <Link to="trends" style={{ textDecoration: "none" }}>
        <div className="items">
          <ExploreIcon />
          Explore
        </div>
      </Link>
      <Link to="subscriptions" style={{ textDecoration: "none" }}>
        <div className="items">
          <SubscriptionsIcon />
          Subscriptions
        </div>
      </Link>

      <div className="divider"></div>

      <div className="items">
        <VideoLibraryIcon />
        Library
      </div>
      <div className="items">
        <HistoryIcon />
        History
      </div>

      <div className="divider"></div>

      {!currentUser &&
        <>
        <div className="desc">
        Sign in to like videos, comment and subscribe
        <Link to="signin" style={{ textDecoration: "none" }}>
          <button className="signbtn">
            {" "}
            <SensorOccupiedIcon /> SignIn
          </button>
        </Link>
      </div>

      <div className="divider"></div>
      </>}

      <div className="items">
        <LibraryMusicIcon />
        Music
      </div>
      <div className="items">
        <SportsBasketballIcon />
        Sports
      </div>
      <div className="items">
        <SportsEsportsIcon />
        Gaming
      </div>
      <div className="items">
        <MovieCreationIcon />
        Movies
      </div>
      <div className="items">
        <ArticleIcon />
        News
      </div>
      <div className="items">
        <LiveTvIcon />
        Live
      </div>

      <div className="divider"></div>

      <div className="items">
        <SettingsIcon />
        Settings
      </div>
      <div className="items">
        <FlagIcon />
        Report
      </div>
      <div className="items">
        <HelpOutlineIcon />
        Help
      </div>
      <div className="items">
        <SettingsBrightnessIcon />
        Light Mode
      </div>
    </div>
    </>
  );
};

export default Sidebar;
