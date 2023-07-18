import React from "react";
import Modal from "@mui/material/Modal";
import mylogo16 from "./pics/cmp27.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "250px",
  bgcolor: "#FFFFFF",
  borderRadius: 5,
  p: 4,
};

function Trainerprofilesuccessfully() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/companyprofile");
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedUserId = queryParams.get("userId");
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p
            style={{
              color: "#FF0000",
              fontWeight: "bolder",
              marginTop: -10,
              alignContent: "center",
              marginLeft: "170px",
            }}
          >
            Delete
          </p>
          <div
            style={{
              display: "flex",
              displayDirection: "row",
              marginLeft: -30,
            }}
          >
            <img
              style={{ width: 460 }}
              src={mylogo16}
              alt="Something is wrong"
            />
          </div>
          <p style={{ color: "#000000", fontWeight: "bolder", marginLeft: 60 }}>
            Are you sure to Delete this Profile?
          </p>
          <p style={{ color: "#AAAAAA", marginTop: 30 }}>Reason for Delete:</p>
          <TextField
            fullWidth
            label="Type..."
            id="fullWidth"
            style={{ borderRadius: "40px" }}
            inputProps={{
              style: {
                height: "50px",
              },
            }}
          />
          <Button
            style={{
              fontSize: 15,
              marginTop: 30,
              marginLeft: 320,
              backgroundColor: "#2445A4",
              color: "#FFFFFF",
              height: 20,
            }}
            onClick={viewmore}
            sx={{ textTransform: "none" }}
            varient="contained"
          >
            Cancel
          </Button>
          <Button
            style={{
              fontSize: 15,
              marginTop: -45,
              marginLeft: 245,
              color: "#AAAAAA",
              height: 20,
            }}
            sx={{ textTransform: "none" }}
            varient="text"
            onClick={() => {
              axios
                .delete(`http://localhost:9595/companies/${selectedUserId}`)
                .then((response) => {
                  console.log("Profile deleted successfully");
                  navigate("/companyprofile");
                })
                .catch((error) => {
                  console.error("Error deleting profile", error);
                });
            }}
          >
            Confirm
          </Button>
        </Box>
      </Modal>
      <div
        style={{ backgroundColor: "white", height: "100vh", cursor: "pointer" }}
        onClick={handleOpen}
      ></div>
    </>
  );
}

export default Trainerprofilesuccessfully;
