import React from "react";
import "./Moreinfo.scss";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../redux/userSlice";
import axios from "axios";

const Moreinfo = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    try {
      const res = await axios.get(`/api/auth/signout`, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="moreInfoContainer">
      <div className="userImg">
        <img src={currentUser.img} alt="" />
      </div>
      <div className="userItem">{currentUser.name}</div>
      <div className="userItem">{currentUser.email}</div>
      <div className="partition"></div>
      <div className="logout" onClick={handleLogout}>
        {" "}
        <LogoutIcon style={{ backgroundColor: "transparent" }} /> Sign Out
      </div>
    </div>
  );
};

export default Moreinfo;
