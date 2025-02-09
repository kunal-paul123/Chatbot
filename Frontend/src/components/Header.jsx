import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./NavigationLink";

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
                  bg="#212121"
                  to="/chat"
                  text="Go To Chat"
                  textColor="#fff"
                />
                <NavigationLink
                  bg="#212121"
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
