import React from "react";
import Modal from "@mui/material/Modal";
import mylogo from "./pics/cmp38.png";
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
    navigate("/companyprofile");
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
              height: "305px",
              width: "350px",
              marginLeft: 225,
              marginRight: 225,
              marginTop: 50,
              marginBottom: 100,
            }}
            alt="something is wrong"
          />
          <p
            style={{
              fontSize: "25px",
              marginTop: -95,
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Company profile added successfully
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
