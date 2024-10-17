import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function index({ user }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "9rem" }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: 800,
          height: 300,
          width: {
            xs: "85vw",
            sm: "50vw",
            lg: "40vw",
            xl: "30vw",
          },
          mt: 8,
        }}

        style={{backgroundColor:"#f5f3f2"}}
      >
        <CardActionArea>
          <Typography gutterBottom variant="h4" component="div">
            User Logged In Details
          </Typography>
          {user ? (
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                fontSize:{
                  xs: "0.5rem",
                  sm: "0.5rem",
                  lg: "1rem",
                  xl: "1.25rem",
                },
              }}
            >
              <Typography variant="p" sx={{ color: "text.secondary" }}>
                User id : <b> {user._id} </b>
              </Typography>
              <Typography variant="p" sx={{ color: "text.secondary" }}>
                Username : <b> {user.name} </b>
              </Typography>
              <Typography variant="p" sx={{ color: "text.secondary" }}>
                email : <b> {user.email} </b>
              </Typography>
            </CardContent>
          ) : (
            ""
          )}
        </CardActionArea>
      </Card>
    </div>
  );
}
