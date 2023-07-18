import React from "react";
import mylogo from "./pics/img2.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <nav
        onClick={goToLogin}
        style={{ backgroundColor: "white", cursor: "pointer" }}
      >
        <div
          onClick={goToLogin}
          style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
        >
          <p
            style={{
              marginLeft: 10,
              marginTop: 0,
              color: "#123C79",
              fontSize: "28px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          >
            LWP
          </p>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            variant="text"
            style={{
              color: "black",
              marginLeft: 160,
              fontSize: "12px",
              marginTop: -25,
              cursor: "pointer",
            }}
          >
            Solutions
          </Button>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: "12px",
              marginTop: -25,
              cursor: "pointer",
            }}
            variant="text"
          >
            Watch Demo
          </Button>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: "12px",
              marginTop: -25,
              cursor: "pointer",
            }}
            variant="text"
          >
            Pricing
          </Button>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: "12px",
              marginTop: -25,
              cursor: "pointer",
            }}
            variant="text"
          >
            Why LWP
          </Button>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            style={{
              color: "black",
              marginLeft: 120,
              fontSize: "12px",
              marginTop: -25,
              cursor: "pointer",
            }}
            variant="text"
          >
            Contact
          </Button>
          <Button
            onClick={goToLogin}
            sx={{ textTransform: "none" }}
            style={{
              color: "blue",
              marginLeft: 510,
              marginTop: 4,
              fontWeight: "bold",
              height: 25,
              fontSize: "12px",
              cursor: "pointer",
            }}
            variant="outlined"
          >
            Login
          </Button>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: `url(${mylogo})`,
          height: "624px",
          width: "1365px",
          marginTop: -52,
          cursor: "pointer",
        }}
        onClick={goToLogin}
      >
        <p
          style={{
            marginLeft: -130,
            padding: 150,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          Give Your LWP Smart Technology
        </p>
        <div
          style={{
            height: 200,
            width: 300,
            justifyContent: "left",
            cursor: "pointer",
          }}
          onClick={goToLogin}
        >
          <p
            style={{
              marginLeft: 20,
              marginTop: -130,
              color: "white",
              textAlign: "left",
            }}
          >
            Integer elementum massa at nulla placerat varius. Suspendisse in
            libero risus, in interdum massa. Vestibulum ac leo vitae metus
            faucibus gravida ac in neque.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: -30,
            cursor: "pointer",
          }}
          onClick={goToLogin}
        >
          <Button
            sx={{ textTransform: "none" }}
            style={{ marginLeft: 20, height: 25, width: 150 }}
            variant="contained"
            onClick={goToLogin}
          >
            Request Demo
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            style={{
              marginLeft: 30,
              height: 25,
              width: 150,
              backgroundColor: "#4F4F4F",
            }}
            onClick={goToLogin}
            variant="contained"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
