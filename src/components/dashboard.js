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
import mylogo10 from "./pics/cmp13.png";
import mylogo11 from "./pics/cmp14.png";
import mylogo12 from "./pics/cmp15.png";
import mylogo13 from "./pics/cmp16.png";
import mylogo14 from "./pics/Path.png";
import mylogo15 from "./pics/Path2.png";
import mylogo16 from "./pics/calender.png";
import mylogo17 from "./pics/cmp17.png";
import mylogo18 from "./pics/cmp18.png";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    fetchCompanyCount();
    fetchTrainerCount();
    fetchTrainingCount();
  }, []);

  const fetchTrainingCount = async () => {
    try {
      const response = await axios.get('http://localhost:9595/training/count');
      const countValue = response.data;
      setCount(countValue);
    } catch (error) {
      console.error('Error fetching training count:', error);
    }
  };

  const fetchCompanyCount = async () => {
    try {
      const response = await axios.get('http://localhost:9595/companies/count');
      const countValue = response.data;
      setCount1(countValue);
    } catch (error) {
      console.error('Error fetching company count:', error);
    }
  };

  const fetchTrainerCount = async () => {
    try {
      const response = await axios.get('http://localhost:9595/trainers/count');
      const countValue = response.data;
      setCount2(countValue);
    } catch (error) {
      console.error('Error fetching trainer count:', error);
    }
  };

  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/companyprofile");
  };
  const logi = () => {
    navigate("/companyprofile");
  };
  const logi1 = () => {
    navigate("/trainerprofile");
  };
  const logi2 = () => {
    navigate("/trainingprofile");
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
        <Grid item xs={12} style={{ marginTop: -35 }}>
          <Item>
            <p
              style={{
                fontSize: "35px",
                fontWeight: "bolder",
                color: "#2445A4",
                marginLeft: 40,
              }}
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
        <Grid item xs={1.5} style={{ marginTop: -15 }}>
          <Item style={{ height: 587 }}>
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
                  cursor:'pointer'
                }}
                onClick={logi}
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
                  cursor:'pointer'
                }}
                onClick={logi1}
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
                  cursor:'pointer'
                }}
                onClick={logi2}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Training Profile
              </Button>
            </div>
            <p></p>
          </Item>
        </Grid>
        <Grid item xs={3.5} style={{ marginTop: -10, marginLeft: 50 }}>
          <Item>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 20,
                  borderRadius: 2,
                  height: "150px",
                  width: "100px",
                  backgroundImage: `url(${mylogo13})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  style={{
                    width: "55px",
                    height: "55px",
                    marginTop: 30,
                    marginLeft: "23px",
                    // eslint-disable-next-line
                    marginTop: "8px",
                  }}
                  src={mylogo10}
                  alt="Something is wrong"
                />
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "35px",
                    color: "#000000",
                    textAlign: "center",
                    marginTop: -5,
                  }}
                >
                  {count1}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: -42,
                    color: "#AAAAAA",
                  }}
                >
                  Companies Working
                </p>
              </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 20,
                  borderRadius: 2,
                  height: "150px",
                  width: "100px",
                  backgroundImage: `url(${mylogo13})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  style={{
                    width: "55px",
                    height: "55px",
                    marginTop: 30,
                    marginLeft: "23px",
                    // eslint-disable-next-line
                    marginTop: "8px",
                  }}
                  src={mylogo11}
                  alt="Something is wrong"
                />
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "35px",
                    color: "#000000",
                    textAlign: "center",
                    marginTop: -5,
                  }}
                >
                  {count}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: -42,
                    color: "#AAAAAA",
                  }}
                >
                  Current Trainings
                </p>
              </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 20,
                  borderRadius: 2,
                  height: "150px",
                  width: "100px",
                  backgroundImage: `url(${mylogo13})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  style={{
                    width: "55px",
                    height: "55px",
                    marginTop: 30,
                    marginLeft: "23px",
                    // eslint-disable-next-line
                    marginTop: "8px",
                  }}
                  src={mylogo12}
                  alt="Something is wrong"
                />
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "35px",
                    color: "#000000",
                    textAlign: "center",
                    marginTop: -5,
                  }}
                >
                  {count2}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: -42,
                    color: "#AAAAAA",
                  }}
                >
                  No. of Trainers
                </p>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={5.5} style={{ marginTop: -10, marginLeft: 50 }}>
          <Item>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <p style={{ marginLeft: 10, fontWeight: "bolder" }}>Shift Log</p>
              <img
                style={{
                  marginLeft: 190,
                  marginTop: 20,
                  width: "10px",
                  height: "10px",
                }}
                src={mylogo14}
                alt="Something is wrong"
              />
              <p style={{ marginLeft: 10, fontWeight: "bolder" }}>Today</p>
              <img
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  width: "10px",
                  height: "10px",
                }}
                src={mylogo15}
                alt="Something is wrong"
              />
              <FormControl style={{ marginLeft: 100, marginTop: 11 }}>
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
            <hr
              style={{
                marginTop: -2,
              }}
            />
            <p
              style={{
                fontWeight: "bolder",
                fontSize: "35px",
                color: "#000000",
                marginLeft: 30,
              }}
            >
              12
            </p>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <p
                style={{
                  marginTop: -42,
                  color: "#AAAAAA",
                  marginLeft: 18,
                  marginBottom: -10,
                }}
              >
                Total Staff
              </p>
              <div
                style={{
                  borderLeft: "2px solid #AAAAAA",
                  height: "100px",
                  marginTop: -100,
                  marginLeft: 50,
                }}
              />
              <div
                style={{
                  marginTop: -82,
                  color: "black",
                  marginLeft: 20,
                  marginBottom: -10,
                  backgroundImage: `url(${mylogo17})`,
                  height: "30px",
                  width: "450px",
                  borderRadius: 5,
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  displayDirection: "row",
                }}
              >
                <p
                  style={{
                    marginLeft: 10,
                    marginTop: 4,
                    color: "#259925",
                    fontWeight: "bolder",
                    fontSize: "18px",
                  }}
                >
                  6
                </p>
                <p style={{ marginLeft: 30, marginTop: 4, color: "black" }}>
                  on Duty
                </p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${mylogo18})`,
                  height: "30px",
                  width: "450px",
                  marginLeft: -450,
                  marginTop: -42,
                  display: "flex",
                  displayDirection: "row",
                  borderRadius: 5,
                }}
              >
                <p
                  style={{
                    marginLeft: 10,
                    marginTop: 2,
                    color: "#259925",
                    fontWeight: "bolder",
                    fontSize: "18px",
                  }}
                >
                  5
                </p>
                <p style={{ marginLeft: 30, marginTop: 2, color: "black" }}>
                  on Leave
                </p>
              </div>
            </div>
            <Button
              style={{
                marginLeft: 540,
                marginTop: -10,
                color: "#2445A4",
                fontSize: 12,
              }}
              variant="text"
              sx={{ textTransform: "none" }}
              onClick={viewmore}
            >
              View More
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
