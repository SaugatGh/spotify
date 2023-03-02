import React from "react";
import { afterLoginGoodAfternoon } from "../../Data";
import { Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./Rightbar.scss";
const Item = styled(Paper)(() => ({
  textAlign: "center",

  height: 90,

  lineHeight: "60px",
  gap: "10px",
}));
const AfterLogin = () => {
  return (
    <div>
      <div className="afterLoginContainer">
        <Box
          sx={{
            bgcolor: "#1c1c1c",
            color: "white",
          }}
        >
          <Typography
            variant="h6"
            fontSize="large"
            sx={{ margin: "0px 10px", padding: "10px" }}
          >
            Good Afternoon
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  p: 2,
                  gap: 3,
                }}
              >
                {afterLoginGoodAfternoon.map((afterLogin, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Item
                      sx={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "#242424",
                        position: "relative",
                        "&:hover": {
                          color: "#fff",
                          "& .icon": {
                            color: "#fff",
                            marginRight:"10px",

                            visibility: "visible",
                            height: "100px",
                            width: "50px",
                          },
                        },
                        "& .icon": {
                          position: "absolute",

                          right: "0",
                          bottom: "0",

                          color: "transparent",
                          visibility: "hidden",
                        },
                      }}
                    >
                      <img
                        src={afterLogin.img}
                        style={{
                          height: "80%",
                        }}
                      />
                      <Typography>{afterLogin.desc}</Typography>
                      <PlayCircleFilledWhiteIcon
                        fontSize="large"
                        className="icon"
                        style={{ color: "green" }}
                      />
                    </Item>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default AfterLogin;
