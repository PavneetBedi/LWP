import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import mylogo10 from "./pics/cmp21.png";
import mylogo from "./pics/search.png";
import mylogo1 from "./pics/cmp5.png";
import mylogo2 from "./pics/cmp6.png";
import mylogo3 from "./pics/cmp7.jpg";
import mylogo4 from "./pics/cmp7.png";
import mylogo5 from "./pics/cmp19.png";
import mylogo6 from "./pics/cmp9.png";
import mylogo7 from "./pics/cmp10.png";
import mylogo8 from "./pics/cmp36.png";
import mylogo9 from "./pics/cmp12.png";
import mylogo11 from "./pics/cmp22.png";
// import mylogo12 from "./pics/cmp23.png";
import mylogo13 from "./pics/cmp24.png";
import Icon from "@mui/material/Icon";
import { loadCSS } from "fg-loadcss";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mylogo14 from "./pics/cmp25.png";
import mylogo15 from "./pics/cmp26.png";
import Box from "@mui/material/Box";
import mylogo16 from "./pics/cmp27.png";
import mylogo17 from "./pics/Path2.png";
import mylogo18 from "./pics/cmp28.png";
import mylogo19 from "./pics/cmp29.png";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
// eslint-disable-next-line
const node = loadCSS(
  "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
  // Inject before JSS
  document.querySelector("#font-awesome-css") || document.head.firstChild
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "#FFFFFF",
  borderRadius: 5,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  // function createData(
  //   empty: number,
  //   CompanyName: string,
  //   TrainerName: string,
  //   StartDayEndDay: string,
  //   TechStack: string,
  //   DurationFullDayHalfDay: string,
  //   AddProfile: string
  // ) {
  //   return {
  //     empty,
  //     CompanyName,
  //     TrainerName,
  //     StartDayEndDay,
  //     TechStack,
  //     DurationFullDayHalfDay,
  //     AddProfile,
  //   };
  // }

  // const rows = [
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo11} alt="BigCo Inc. logo" />
  //   ),
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo12} alt="BigCo Inc. logo" />
  //   ),
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo12} alt="BigCo Inc. logo" />
  //   ),
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo12} alt="BigCo Inc. logo" />
  //   ),
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo12} alt="BigCo Inc. logo" />
  //   ),
  //   createData(
  //     <Checkbox {...label} />,
  //     "TedX ",
  //     "Rahul ",
  //     "Jan, 20, 2023 - Jan, 20, 2023",
  //     "-",
  //     "Half Day",
  //     <img src={mylogo12} alt="BigCo Inc. logo" />
  //   ),
  // ];
  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/trainingdetails");
  };
  const logi = () => {
    navigate("/dashboard");
  };
  const logi1 = () => {
    navigate("/companyprofile");
  };
  const logi2 = () => {
    navigate("/trainerprofile");
  };
  const logi3 = () => {
    navigate("/trainingprofile");
  };
  const viewmore1 = () => {
    navigate(`/screen17?userId=${selectedUser.id}`);
  };

  const viewmore2 = () => {
    navigate(`/trainingdetails?userId=${selectedUser.id}`);
  };

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:9595/training");
  //   setUsers(result.data);
  // };

  // const loadUsers = async () => {
  //   try {
  //     const trainingResponse = await axios.get('http://localhost:9595/training');
  //     const trainingData = trainingResponse.data;
  
  //     for (const training of trainingData) {
  //       const trainerId = training.trainer_id;
  //       const trainerResponse = await axios.get(`http://localhost:9595/trainers/${trainerId}`);
  //       const trainerData = trainerResponse.data;
  //       const trainerName = trainerData.trainername;
  //       training.trainer_id = trainerData;
  //     }
  
  //     setUsers(trainingData);
  //   } catch (error) {
  //     console.error('Error fetching training data:', error);
  //   }
  // };

  // const [studentDetails, setStudentDetails] = useState('');
  // const handleButtonClick = async (trainingId) => {
  //   console.log(trainingId);
  //   try {
  //     const response = await axios.get(`/training/${trainingId}/students`);
  //     const students = response.data;

  //     // Process the returned data and generate the student details
  //     const details = students.map((student) => (
  //       <div key={student.id}>
  //         <p>ID: {student.id}</p>
  //         <p>Name: {student.studentname}</p>
  //         <p>Email: {student.emailid}</p>
  //         <br />
  //       </div>
  //     ));

  //     // Set the student details state
  //     setStudentDetails(details);

  //     // Display student details in an alert box
  //     alert(`Training ID: ${trainingId}\n\n${details}`);
  //   } catch (error) {
  //     // Handle error case
  //     alert('Failed to fetch student details.');
  //   }
  // };

  // const handleButtonClick = async (trainingId) => {
  //   console.log(trainingId);
  
  //   try {
  //     const response = await axios.get(`http://localhost:9595/training/${trainingId}/students`);
  //     const students = response.data;
  
  //     // Process the returned data and generate the student details
  //     const details = students.map((student) => (
  //       `ID: ${student.id}\nName: ${student.studentname}\nEmail: ${student.emailid}\n\n`
  //     )).join('');
  
  //     // Display student details in an alert box
  //     alert(`Training ID: ${trainingId}\n\n${details}`);
  //   } catch (error) {
  //     // Log the error for debugging
  //     console.error(error);
  
  //     // Handle error case
  //     alert('Failed to fetch student details. Please check the console for more information.');
  //   }
  // };
  
  // const handleButtonClick = async (trainingId) => {
  //   console.log(trainingId);
  
  //   try {
  //     const response = await axios.get(`http://localhost:9595/training/${trainingId}/students`);
  //     const students = response.data[0].students;
  
  //     // Process the returned data and generate the student details
  //     const details = students.map((student) => (
  //       `ID: ${student.id}\nName: ${student.studentname}\nEmail: ${student.emailid}\n\n`
  //     )).join('');
  
  //     // Display student details in an alert box
  //     alert(`Training ID: ${trainingId}\n\n${details}`);
  //   } catch (error) {
  //     // Log the error for debugging
  //     console.error(error);
  
  //     // Handle error case
  //     alert('Failed to fetch student details. Please check the console for more information.');
  //   }
  // };

  const handleButtonClick = async (trainingId) => {
    console.log(trainingId);
  
    try {
      const response = await axios.get(`http://localhost:9595/training/${trainingId}/students`);
      console.log(response.data); // Print the response data for debugging
  
      // Process the returned data and generate the student details
      const students = response.data[0].trainings[0].students;
    //   let details = '';
    //   students.forEach((student) => {
    //   details += `ID: ${student.id}\nName: ${student.studentname}\nEmail: ${student.emailid}\n\n`;
    // });
      const details = students.map((student) => (
        `ID: ${student.id}\nName: ${student.studentname}\nEmail: ${student.emailid}\n\n`
      )).join('');
  
      // Display student details in an alert box
      alert(`Training ID: ${trainingId}\n\n${details}`);
    } catch (error) {
      // Log the error for debugging
      console.error(error);
  
      // Handle error case
      alert('Failed to fetch student details. Please check the console for more information.');
    }
  };

  const loadUsers = async () => {
    try {
      const trainingResponse = await axios.get('http://localhost:9595/training');
      const trainingData = trainingResponse.data;
  
      // for (const training of trainingData) {
      //   const trainerId = training.trainer_id;
      //   const trainerResponse = await axios.get(`http://localhost:9595/trainers/${trainerId}`);
      //   const trainerData = trainerResponse.data;
      //   const trainerName = trainerData.trainername;
      //   training.trainername = trainerName;
      // }
  
      setUsers(trainingData);
    } catch (error) {
      console.error('Error fetching training data:', error);
    }
  };
  
  
  useEffect(() => {
    loadUsers();
  }, []);
  
  

  const handleRowClick = (user) => {
    setSelectedUser(user);
    handleOpen();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", displayDirection: "row" }}>
            <img
              style={{
                marginTop: -20,
                marginLeft: 380,
                width: 20,
                height: 20,
              }}
              src={mylogo14}
              alt="Something is wrong"
            />
            <img
              style={{
                marginTop: -15,
                width: 10,
                height: 10,
                marginLeft: -15,
              }}
              src={mylogo15}
              alt="Something is wrong"
            />
          </div>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ fontWeight: "bolder", color: "#000000", marginTop: -15 }}
          >
            Training Profile
          </Typography>
          <Typography>Created Date : Jan, 20, 2023</Typography>
          <div style={{ display: "flex", displayDirection: "row" }}>
            <Button
              style={{
                height: "30px",
                marginTop: -15,
                marginLeft: 344,
                color: "#2445A4",
                cursor: "pointer",
              }}
              onClick={viewmore2}
              variant="text"
              sx={{ textTransform: "none" }}
            >
              Edit
            </Button>
            <img
              fill="#2445A4"
              style={{
                marginTop: -4,
                width: 8,
                height: 8,
                marginLeft: -10,
                color: "#2445A4",
              }}
              src={mylogo17}
              alt="Something is wrong"
            />
          </div>
          <div style={{ display: "flex", displayDirection: "row" }}>
            <img
              style={{ width: 400 }}
              src={mylogo16}
              alt="Something is wrong"
            />
          </div>
          <img
            style={{ marginTop: 20, width: 100, height: 100, marginLeft: 40 }}
            src={mylogo18}
            alt="Something is wrong"
          />
          <Button
            style={{
              fontSize: 10,
              marginTop: 20,
              marginLeft: -80,
              color: "#444444",
            }}
            sx={{ textTransform: "none" }}
            varient="text"
          >
            Add photo
          </Button>
          <div
            style={{
              disply: "flex",
              displayDirection: "column",
              textAlignLast: "left",
              marginTop: -140,
              marginLeft: 170,
            }}
          >
            {/* <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                Company Name :<b style={{ color: "black" }}> TedX Pvt. Ltd.</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                Trainer Name : <b style={{ color: "black" }}> Rohan Khurana</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15, marginTop: 20 }}>
                Start Date : <b style={{ color: "black" }}> 20 April 2009</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                End Date :<b style={{ color: "black" }}> 20 April 2009</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15, marginTop: 20 }}>
                Email : <b style={{ color: "black" }}> tedecopvt09@gmail.com</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                Contact No. : <b style={{ color: "black" }}> 91 236 548 563</b>{" "}
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15, marginTop: 20 }}>
                Tech Stack: -
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                Duartion- Full / Half Day :{" "}
                <b style={{ color: "black" }}> Full Day</b>{" "}
              </p> */}

            <p style={{ color: "#AAAAAA", fontSize: 15 }}>
              {selectedUser && (
                <div>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Company Name:{" "}
                    <b style={{ color: "black" }}>{selectedUser.companyname}</b>
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Trainer Name :{" "}
                    <b style={{ color: "black" }}>
                      {" "}
                      {selectedUser.trainername}
                    </b>{" "}
                  </p>
                  <p
                    style={{
                      color: "#444444",
                      fontWeight: "bolder",
                      marginTop: 60,
                      marginLeft: -140,
                    }}
                  >
                    Attachments
                  </p>
                  <img
                    style={{
                      width: 100,
                      height: 100,
                      marginLeft: -130,
                    }}
                    src={mylogo19}
                    alt="Something is wrong"
                  />
                  <p
                    style={{
                      marginTop: 0,
                      width: 100,
                      height: 100,
                      marginLeft: -130,
                      fontSize: 12,
                      color: "#444444",
                    }}
                  >
                    Company Contract
                  </p>
                  <p
                    style={{ color: "#AAAAAA", fontSize: 15, marginTop: -280 }}
                  >
                    Start Date:{" "}
                    <b style={{ color: "black" }}>{selectedUser.startdate}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    End Date:{" "}
                    <b style={{ color: "black" }}>{selectedUser.enddate}</b>{" "}
                  </p>

                  <p style={{ color: "#AAAAAA", fontSize: 15,marginTop:30 }}>
                    Email :{" "}
                    <b style={{ color: "black" }}>{selectedUser.email}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Contact No :{" "}
                    <b style={{ color: "black" }}>{selectedUser.contactno}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15,marginTop:30 }}>
                    Tech Stack: {" "}
                    <b style={{ color: "black" }}>{selectedUser.techstack}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Duartion- Full / Half Day :{" "}
                    <b style={{ color: "black" }}>{selectedUser.duration} </b>{" "}
                  </p>
                </div>
              )}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              displayDirection: "row",
              marginTop: -60,
            }}
          >
            <Button
              style={{
                fontSize: 15,
                marginTop: 50,
                marginLeft: 280,
                backgroundColor: "#2445A4",
                color: "#FFFFFF",
                height: 20,
                cursor: "pointer",
              }}
              sx={{ textTransform: "none" }}
              varient="contained"
              onClick={viewmore}
            >
              Save
            </Button>
            <Button
              style={{
                fontSize: 15,
                marginTop: 50,
                marginLeft: 10,
                backgroundColor: "white",
                color: "#AAAAAA",
                height: 20,
                cursor: "pointer",
              }}
              onClick={viewmore1}
              sx={{ textTransform: "none" }}
              varient="text"
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
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
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 30,
                }}
                src={mylogo5}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#CACACA",
                  fontWeight: "bolder",
                  marginLeft: 9,
                  marginTop: 30,
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={logi}
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
                  color: "#AAAAAA",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                  fontWeight: "bolder",
                }}
                onClick={logi1}
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
                  cursor: "pointer",
                }}
                variant="text"
                sx={{ textTransform: "none" }}
                onClick={logi2}
              >
                Trainer Profile
              </Button>
            </div>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "35px",
                  height: "30px",
                  marginLeft: 1,
                  marginTop: 15,
                }}
                src={mylogo4}
                alt="Something is wrong"
              />
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: -21,
                  marginTop: 15,
                }}
                src={mylogo8}
                alt="Something is wrong"
              />
              <Button
                style={{
                  color: "#2445A4",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={logi3}
                variant="text"
                sx={{ textTransform: "none" }}
              >
                Training Profile
              </Button>
            </div>
            <p></p>
          </Item>
        </Grid>
        <Grid item xs={10.3} style={{ marginTop: 0, marginLeft: 20 }}>
          <Item>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                style={{ borderRadius: 10 }}
              >
                <TableHead
                  style={{
                    backgroundImage: `url(${mylogo10})`,
                    backgroundRepeat: "no-repeat",
                    borderRadius: 20,
                    backgroundSize: "cover",
                  }}
                >
                  <TableRow>
                    <TableCell align="center">
                      <Checkbox {...label} />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                      }}
                    >
                      Company Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                      }}
                    >
                      Trainer Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                      }}
                    >
                      Start Day - End Day
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                      }}
                    >
                      Tech Stack
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                      }}
                    >
                      Duration Full Day/Half Day
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        verticalAlign: "top",
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "#444444",
                        cursor: "pointer",
                      }}
                      onClick={viewmore}
                    >
                      <Icon
                        color="primary"
                        baseClassName="fas"
                        className="fa-plus-circle"
                        style={{ marginTop: 3 }}
                        onClick={viewmore}
                      />
                      Add Profile
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow
                      key={user.companyname}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" style={{ color: "bold" }}>
                        <Checkbox {...label} />
                      </TableCell>
                      <TableCell align="center">{user.companyname}</TableCell>
                      <TableCell align="center">{user.trainername}</TableCell>
                      <TableCell align="center">
                        {user.startdate} - {user.enddate}
                      </TableCell>
                      <TableCell align="center">{user.techstack}</TableCell>
                      <TableCell align="center">{user.duration}</TableCell>
                      <TableCell align="center">
                        {user.AddProfile}
                        <img
                          src={mylogo11}
                          onClick={handleOpen}
                          alt="BigCo Inc. logo"
                          onClick={() => handleRowClick(user)}
                          style={{cursor:'pointer'}}
                        />
                        <Button onClick={() => handleButtonClick(user.id)} variant="text">view student details  </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <img
              src={mylogo13}
              style={{ marginTop: 15, height: 15, width: "100%" }}
              alt="BigCo Inc. logo"
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
