import React from "react";
import { Avatar, Box, Button, dividerClasses, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/ChatItem";

const chatMessages = [
  { role: "user", content: "Hello! How are you?" },
  { role: "assistant", content: "I'm good! How can I assist you today?" },
  { role: "user", content: "Tell me a joke." },
  {
    role: "assistant",
    content:
      "Sure! Why don’t scientists trust atoms? Because they make up everything!",
  },
  { role: "user", content: "That's funny! Can you suggest a good book?" },
  {
    role: "assistant",
    content:
      "Of course! 'Atomic Habits' by James Clear is a great book on building good habits.",
  },
  { role: "user", content: "Hello! How are you?" },
  { role: "assistant", content: "I'm good! How can I assist you today?" },
  { role: "user", content: "Tell me a joke." },
  {
    role: "assistant",
    content:
      "Sure! Why don’t scientists trust atoms? Because they make up everything!",
  },
  { role: "user", content: "That's funny! Can you suggest a good book?" },
  {
    role: "assistant",
    content:
      "Of course! 'Atomic Habits' by James Clear is a great book on building good habits.",
  },
];

function Chat() {
  const auth = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "#212121",
            color: "white",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "rgba(4, 4, 4, 0.66)",
              color: "white",
              fontWeight: 500,
            }}
          >
            {auth.user && auth.user.name ? auth.user.name[0] : ""}
          </Avatar>
          <Typography
            sx={{ mx: "auto", fontFamily: "work sans", color: "#ECECEC" }}
          >
            You are talking to a chatbot
          </Typography>
          <Typography
            sx={{
              mx: "auto",
              fontFamily: "work sans",
              color: "#ECECEC",
              my: 4,
              p: 3,
            }}
          >
            You can ask some questions related to knowledge, Business, Advices,
            Education etc. But avoid sharing Personal Information.
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: "rgba(249, 245, 245, 1)",
              color: "#000",
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "#212121",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
