import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./NavigationLink";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const auth = useAuth();

  return (
    <>
      <AppBar
        sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth.isLoggedIn ? (
              <>
                <NavigationLink
                  bg="#000"
                  to="/chat"
                  text="Go To Chat"
                  textColor="#fff"
                />
                <NavigationLink
                  bg="#000"
                  to="/"
                  text="Logout"
                  textColor="#fff"
                  onClick={auth.logout}
                />
              </>
            ) : (
              <>
                <NavigationLink
                  bg="#000"
                  to="/login"
                  text="Login"
                  textColor="#fff"
                />
                <NavigationLink
                  bg="#000"
                  to="/signup"
                  text="Signup"
                  textColor="#fff"
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
