import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomizeInput from "../components/CustomizeInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await auth.login(email, password);
      toast.success("Login Successful");
    } catch (error) {
      console.log(error); 

      toast.error("Login Failed");
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={"1"}>
      <Box
        padding={8}
        mt={8}
        display={{ md: "flex", sm: "none", xs: "none" }}
      ></Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={"auto"}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              varient="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
              color={"black"}
              fontSize={"22px"}
            >
              Login
            </Typography>
            <CustomizeInput type="email" name="email" label="Email" />
            <CustomizeInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "350px",
                borderRadius: 2,
                bgcolor: "#000",
                color: "white",
                fontWeight: "350",
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
