import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "./context/UserProvider";

const Login = () => {
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: " 4px 7px 8px",
  };

  const row = { display: "flex", marginTop: "1.5rem" };
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldname = event.target.name;
    let newVal = event.target.value;

    setFormData((currData) => {
      currData[fieldname] = newVal;
      return { ...currData };
    });
  };

  const { loader, setLoader } = useContext(UserContext);

  let handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      setLoader(true);
      const response = await axios.post(
        "https://registration-form-1-ixkc.onrender.com/user/login",
        formData
      );

      const { success, message, user } = response.data;
      if (success) {
        loginUser(user);
        setLoader(false);
        toast.success(message);
        navigate("/index");
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Invalid Credentials");
      }
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}

          style={{opacity: loader ? "0.5" : "1" }}
        >
          <Paper
            style={paperStyle}
            sx={{
              width: {
                xs: "85vw",
                sm: "50vw",
                lg: "30vw",
                xl: "23vw",
              },
              height: "60vh",
              mt: 8,
            }}
          >
            <Typography sx={{ fontWeight: "550", fontSize: "2rem" }}>
              Welcome back!{" "}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "0.8rem" }}>
              Enter to get unlimited access to data & information.{" "}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                style={row}
                type="email"
                label="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              ></TextField>
              <TextField
                style={row}
                type="password"
                label="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              ></TextField>
              <Button
                sx={{ mt: 3, width: "100%", p: 1.12 }}
                variant="contained"
                color="success"
                type="submit"
              >
                Submit
              </Button>
              <Typography sx={{ fontWeight: "500", fontSize: "0.9rem", pt: 2 }}>
                Don't have an account? <Link to="/signup">Register here</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
    </>
  );
};

export default Login;
