import "./TopBar.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthService from "../../services/auth_service";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    navigate("/login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Chat App</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search user" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <LogoutIcon className="logoutIcon" onClick={handleLogout} />
      </div>
    </div>
  );
};
