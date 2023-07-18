import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import mylogo from "./pics/search.png";
import mylogo1 from "./pics/cmp5.png";
import mylogo2 from "./pics/cmp6.png";
import mylogo3 from "./pics/cmp7.jpg";
import mylogo4 from "./pics/cmp7.png";
import mylogo5 from "./pics/cmp8.png";
import mylogo6 from "./pics/cmp9.png";
import mylogo7 from "./pics/cmp10.png";
import mylogo8 from "./pics/cmp11.png";
import mylogo9 from "./pics/cmp12.png";
import mylogo10 from "./pics/cmp39.png";
import mylogo11 from "./pics/cmp40.png";
import mylogo12 from "./pics/cmp41.png";
import mylogo13 from "./pics/cmp42.png";
import mylogo14 from "./pics/cmp43.png";
import mylogo16 from "./pics/calender.png";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/dashboard");
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid container style={{ backgroundColor: "#F7F7F7" }}>
        <Grid
          item
          xs={12}
          style={{ marginTop: -35, backgroundColor: "#F7F7F7" }}
        >
          <Item>
            <p
              style={{
                fontSize: "35px",
                fontWeight: "bolder",
                color: "#2445A4",
                marginLeft: 40,
                cursor: "pointer",
              }}
              onClick={viewmore}
            >
              LWP
              <TextField
                id="search-bar"
                className="text"
                variant="outlined"
                placeholder="Search"
                size="small"
                style={{
                  backgroundColor: "#F7F7F7",
                  marginTop: 6,
                  marginLeft: 150,
                }}
                inputProps={{
                  style: {
                    height: "20px",
                    width: "350px",
                  },
                }}
              />
              <Button
                style={{
                  backgroundImage: `url(${mylogo})`,
                  height: "30px",
                  marginTop: -8,
                  marginLeft: -34,
                  backgroundRepeat: "no-repeat",
                }}
                variant="text"
              ></Button>
              <img
                style={{
                  marginLeft: 490,
                  width: "25px",
                  height: "20px",
                }}
                src={mylogo1}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: 20,
                  width: "25px",
                  height: "20px",
                }}
                src={mylogo2}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: 20,
                  width: "35px",
                  height: "30px",
                  borderRadius: 30,
                }}
                src={mylogo3}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: 20,
                  width: "35px",
                  height: "30px",
                }}
                src={mylogo9}
                alt="Something is wrong"
              />
            </p>
          </Item>
        </Grid>
        <Grid
          item
          xs={1.5}
          style={{ marginTop: -30, backgroundColor: "#F7F7F7" }}
        >
          <Item style={{ height: 602 }}>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "35px",
                  height: "30px",
                  marginLeft: 1,
                  marginTop: 30,
                }}
                src={mylogo4}
                alt="Something is wrong"
              />
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: -20,
                  marginTop: 30,
                }}
                src={mylogo5}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#2445A4",
                  fontWeight: "bolder",
                  marginLeft: 8,
                  marginTop: 30,
                  fontSize: "12px",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Dashboard
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 15,
                }}
                src={mylogo6}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#CACACA",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Company Profile
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 15,
                }}
                src={mylogo7}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#CACACA",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Trainer Profile
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 15,
                }}
                src={mylogo8}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#CACACA",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Training Profile
              </Button>
            </div>
            <p></p>
          </Item>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginTop: -10, marginLeft: 30, backgroundColor: "#F7F7F7" }}
        >
          <Item>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  marginLeft: 8,
                  marginTop: 8,
                  fontWeight: "bolder",
                  color: "#444444",
                }}
              >
                Shift Log
              </p>
              <FormControl style={{ marginLeft: 60, marginTop: 8 }}>
                <Select
                  style={{
                    marginLeft: 35,
                    marginTop: 3,
                    width: 140,
                    height: 22,
                    backgroundColor: "white",
                    backgroundImage: `url(${mylogo16})`,
                    backgroundRepeat: "no-repeat",
                    padding: 10,
                    fontSize: 12,
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem style={{ fontSize: "10px" }} value={"Sick Leave"}>
                    Jan,20,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,21,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,22,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,23,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,24,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,25,2023
                  </MenuItem>
                  <MenuItem style={{ fontSize: "10px" }} value={"Casual Leave"}>
                    Jan,26,2023
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <p
              style={{
                marginLeft: -26,
                marginTop: -35,
                padding: 34.5,
                color: "#C1C1C1",
              }}
            >
              9:00 AM to 6:00 PM
            </p>
          </Item>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ marginTop: -10, marginLeft: 30, backgroundColor: "#F7F7F7" }}
        >
          <Item>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <p
                style={{
                  marginLeft: 7,
                  fontWeight: "bolder",
                  color: "#444444",
                }}
              >
                On Leave / On Duty
              </p>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  marginLeft: 10,
                  height: "35px",
                }}
                src={mylogo10}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: -25,
                  marginTop: 5,
                  width: "15px",
                  height: "25px",
                }}
                src={mylogo11}
                alt="Something is wrong"
              />
              <p style={{ color: "#C1C1C1", marginLeft: 20, marginTop: -2 }}>
                <b style={{ color: "black", fontSize: "25px" }}>5 </b> on Leave
              </p>
              <img
                style={{
                  marginLeft: 50,
                  height: "35px",
                }}
                src={mylogo12}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: -25,
                  marginTop: 5,
                  width: "15px",
                  height: "25px",
                }}
                src={mylogo13}
                alt="Something is wrong"
              />
              <p style={{ color: "#C1C1C1", marginLeft: 20, marginTop: -2 }}>
                <b style={{ color: "black", fontSize: "25px" }}>6 </b> on Duty
              </p>
            </div>
          </Item>
        </Grid>
        <p
          style={{
            color: "#444444",
            marginLeft: -710,
            marginTop: 110,
            backgroundColor: "#F7F7F7",
          }}
        >
          On Duty
        </p>
        <Grid
          container
          spacing={3}
          style={{
            marginLeft: 178,
            marginTop: -440,
            backgroundColor: "#F7F7F7",
          }}
        >
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
          <Grid item xs={1.5}>
            <img
              style={{ height: "170px", width: "125px" }}
              src={mylogo14}
              alt="Something is wrong"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container></Grid>
    </>
  );
}

export default Dashboard;
