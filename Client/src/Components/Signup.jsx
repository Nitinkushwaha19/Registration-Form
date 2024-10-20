import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";
import {toast} from "react-toastify";
import UserContext from "./context/UserProvider";

const Signup = () => {
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: " 4px 7px 8px",
  };

  const row = { display: "flex", marginTop: "0.75rem" };
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    name: "",
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

    try{
      setLoader(true);
      const response = await axios.post("https://registration-form-1-ixkc.onrender.com/user/signup",formData)
      const {message,success} = response.data;
      setLoader(false);
      if(success){
        toast.success(message);
        navigate("/login");
      } else {
        toast.error(message);
        navigate("/signup");
      }
      
    }catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
      setFormData({
      name: "",
      email :"",
      password :""
    });
  };

  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
          height: "65vh",
          mt: 8,
        }}
      >
        <Typography sx={{ fontWeight: "550", fontSize: "2rem" }}>
          Signup{" "}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            style={row}
            type="text"
            label="Enter name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          ></TextField>
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
            sx={{ mt: 3, width: "100%", p: 1.25 }}
            variant="contained"
            color="success"
            type="submit"
          >
            Submit
          </Button>
          <Typography sx={{ fontWeight: "500", fontSize: "0.95rem", pt:2}}>
            Already have an account?  <Link to="/login">Sign In</Link> 
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
