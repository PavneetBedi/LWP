import React from "react";
import Modal from "@mui/material/Modal";
import mylogo from "./pics/cmp37.png";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "450px",
  bgcolor: "#FFFFFF",
  borderRadius: 5,
  cursor: "pointer",
  p: 4,
};

function Trainerprofilesuccessfully() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const viewmore = () => {
    navigate("/trainerprofile");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={viewmore}
      >
        <Box sx={style}>
          <img
            src={mylogo}
            style={{
              height: "405px",
              width: "680px",
              marginLeft: 70,
              marginRight: 50,
              marginTop: 10,
              marginBottom: 10,
            }}
            alt="something is wrong"
          />
          <p
            style={{
              fontSize: "25px",
              marginTop: -15,
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Trainer profile added successfully
          </p>
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
