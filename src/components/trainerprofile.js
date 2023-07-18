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
import mylogo7 from "./pics/cmp33.png";
import mylogo8 from "./pics/cmp11.png";
import mylogo9 from "./pics/cmp12.png";
import mylogo11 from "./pics/cmp22.png";
// import mylogo12 from "./pics/cmp23.png";
import Box from "@mui/material/Box";
import mylogo13 from "./pics/cmp24.png";
import mylogo14 from "./pics/cmp25.png";
import mylogo15 from "./pics/cmp26.png";
import mylogo16 from "./pics/cmp27.png";
import mylogo17 from "./pics/Path2.png";
import mylogo18 from "./pics/cmp34.png";
import mylogo19 from "./pics/cmp29.png";
import Typography from "@mui/material/Typography";
import person from "./pics/cmp32.png";
import Icon from "@mui/material/Icon";
import { loadCSS } from "fg-loadcss";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/trainerdetails");
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
  const logi4 = () => {
    navigate("/trainerprofilesuccessfully");
  };

  const viewmore2 = () => {
    navigate(`/trainerdetails?userId=${selectedUser.id}`);
  };

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9595/trainers");
    setUsers(result.data);
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    handleOpen();
  };

  const viewmore1 = () => {
    navigate(`/screen16?userId=${selectedUser.id}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:9595/upload-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
            style={{ fontWeight: "bolder", marginTop: -15 }}
          >
            Trainer Profile
          </Typography>
          <Typography>Onboard Date:Jan,20,2023</Typography>
          <div style={{ display: "flex", displayDirection: "row" }}>
            <Button
              style={{
                height: "30px",
                marginTop: -15,
                marginLeft: 344,
                color: "#2445A4",
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
            style={{ marginTop: 20, width: 100, height: 100, marginLeft: 20 }}
            src={mylogo18}
            alt="Something is wrong"
          />
          <form onSubmit={handleSubmit}>
            <input
              id="file-input"
              style={{ marginTop: 7, marginLeft: 30 }}
              type="file"
            />
            <Button
              style={{
                fontSize: 10,
                marginTop: -35,
                marginLeft: -250,
                color: "#444444",
              }}
              sx={{ textTransform: "none" }}
              varient="text"
              color="primary"
              type="submit"
            >
              Add Profile photo
            </Button>
          </form>
          <div
            style={{
              disply: "flex",
              displayDirection: "column",
              textAlignLast: "left",
              marginTop: -140,
              marginLeft: 170,
            }}
          >
            <p style={{ color: "#AAAAAA", fontSize: 15 }}>
              {selectedUser && (
                <div>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Trainer Name :{" "}
                    <b style={{ color: "black" }}>{selectedUser.trainername}</b>
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Gender :{" "}
                    <b style={{ color: "black" }}> {selectedUser.gender}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Date of Birth :{" "}
                    <b style={{ color: "black" }}>{selectedUser.dateofbirth}</b>{" "}
                  </p>
                  <p
                    style={{
                      color: "#444444",
                      fontWeight: "bolder",
                      marginTop: 40,
                      marginLeft: -140,
                    }}
                  >
                    Attachments
                  </p>
                  <img
                    style={{
                      width: 80,
                      height: 80,
                      marginLeft: -140,
                    }}
                    src={mylogo19}
                    alt="Something is wrong"
                  />
                  <p style={{ color: "#AAAAAA", fontSize: 15, marginTop: -100 }}>
                    Experience:{" "}
                    <b style={{ color: "black" }}>{selectedUser.experience}</b>{" "}
                  </p>

                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Email :{" "}
                    <b style={{ color: "black" }}>{selectedUser.email}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15 }}>
                    Contact No :{" "}
                    <b style={{ color: "black" }}>{selectedUser.contactno}</b>{" "}
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: 15, marginTop: 10 }}>
                    Address :{" "}
                    <b style={{ color: "black" }}>{selectedUser.address}</b>{" "}
                  </p>
                </div>
              )}
            </p>
          </div>
          <p
            style={{
              marginTop: -35,
              width: 100,
              height: 100,
              marginLeft: 50,
              fontSize: 12,
              color: "#444444",
            }}
          >
            Resume
          </p>

          <div style={{ display: "flex", displayDirection: "row" }}>
            <Button
              style={{
                fontSize: 15,
                marginTop: -65,
                marginLeft: 280,
                backgroundColor: "#2445A4",
                color: "#FFFFFF",
                height: 20,
                cursor: "pointer",
              }}
              onClick={logi4}
              sx={{ textTransform: "none" }}
              varient="contained"
            >
              Save
            </Button>
            <Button
              style={{
                fontSize: 15,
                marginTop: -65,
                marginLeft: 10,
                backgroundColor: "white",
                color: "#AAAAAA",
                height: 20,
              }}
              sx={{ textTransform: "none" }}
              varient="text"
              onClick={viewmore1}
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
                  marginTop: 5,
                  width: "35px",
                  height: "35px",
                  borderRadius: 35 / 2,
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
                  cursor: "pointer",
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
                src={mylogo7}
                alt="Something is wrong"
              />
              <Button
                onClick={logi2}
                style={{
                  color: "#2445A4",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                  fontWeight: "bolder",
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
                    <TableCell align="center">
                      <img src={person} alt="please check" />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bolder", fontSize: "18px" }}
                    >
                      Trainer Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bolder", fontSize: "18px" }}
                    >
                      Tech Stack
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bolder", fontSize: "18px" }}
                    >
                      Experience
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bolder", fontSize: "18px" }}
                    >
                      Onboard Date
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={viewmore}
                      style={{
                        verticalAlign: "top",
                        cursor: "pointer",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
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
                      key={user.TrainerName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" style={{ color: "bold" }}>
                        <Checkbox {...label} />
                      </TableCell>
                      <TableCell align="center" style={{ color: "bold" }}>
                        <img
                          style={{
                            marginLeft: 20,
                            marginTop: 5,
                            width: "35px",
                            height: "35px",
                            borderRadius: 35 / 2,
                          }}
                          src={mylogo3}
                          alt="Something is wrong"
                        />
                      </TableCell>

                      <TableCell align="center">{user.trainername}</TableCell>
                      <TableCell align="center">{user.techstack}</TableCell>
                      <TableCell align="center">{user.experience}</TableCell>
                      <TableCell align="center">{user.onboarddate}</TableCell>
                      <TableCell align="center">
                        {user.AddProfile}
                        <img
                          src={mylogo11}
                          onClick={handleOpen}
                          alt="BigCo Inc. logo"
                          onClick={() => handleRowClick(user)}
                          style={{cursor:'pointer'}}
                        />
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
