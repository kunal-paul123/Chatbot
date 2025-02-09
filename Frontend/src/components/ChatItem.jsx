import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";

function ChatItem({ content, role }) {
  const auth = useAuth();

  return role === "assistant" ? (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#212121",
        color: "white",
        gap: 2,
      }}
    >
      <Avatar sx={{ width: 30, height: 30, ml: "0" }}>
        <img src="openai.png" alt="openai" width={"20px"} />
      </Avatar>
      <Box>
        <Typography fontSize={"15px"}>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{ display: "flex", p: 2, bgcolor: "#212121", color: "white", gap: 2 }}
    >
      <Avatar sx={{ width: 30, height: 30, ml: "0" }}>
        {auth.user && auth.user.name ? auth.user.name[0] : ""}
      </Avatar>
      <Box>
        <Typography fontSize={"15px"}>{content}</Typography>
      </Box>
    </Box>
  );
}

export default ChatItem;
