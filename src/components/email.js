import React from "react";
import mylogo from "./pics/cmp1.png";
//import mylogo1 from "./pics/img1.png";
//import mylogo2 from "./pics/img3.png";
import mylogo3 from "./pics/cmp2.png";
import mylogo4 from "./pics/arrowl.png";
import mylogo5 from "./pics/cmp3.png";
import mylogo6 from "./pics/cmp4.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "./schemas/index.jsx";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:9595/logi", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);
            if (res.data.message == "Email not exists") {
              alert("Email not exists");
            } else if (res.data.message == "Login Success") {
              navigate("/dashboard");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert("error");
    }
  }

  const logi1 = () => {
    navigate("/login");
  };
  const logi2 = () => {
    navigate("/Otp");
  };
  const newuser = () => {
    navigate("/register");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        if (values) {
          navigate("/dashboard");
        }
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xs={7}
          style={{
            //backgroundImage: `url(${mylogo1})`,
            opacity: 1,
            backgroundColor: "#F5F6FA",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "657px",
          }}
        >
          <img
            style={{
              marginTop: "150px",
              marginLeft: "25px",
              marginRight: "15px",
              width: "749px",
              height: "350px",
            }}
            src={mylogo}
            alt="Something is wrong"
          />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            // backgroundImage: `url(${mylogo2})`,
            opacity: 1,
            backgroundColor: "#ECEFF4",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "657px",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
            }}
            style={{
              backgroundImage: `url(${mylogo3})`,
              opacity: 1,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "40px",
              marginBottom: "40px",
              marginLeft: "80px",
              marginRight: "80px",
              height: "500px",
              borderRadius: 30,
            }}
          >
            <img
              style={{
                marginTop: -10,
                width: "10px",
                height: "15px",
                marginLeft: -350,
                cursor: "pointer",
              }}
              onClick={logi2}
              src={mylogo4}
              alt="Something is wrong"
            />
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "bold" }}
            >
              <img
                style={{
                  marginTop: -36,
                  width: "100px",
                  height: "100px",
                }}
                src={mylogo5}
                alt="Something is wrong"
              />
            </Typography>
            <p style={{ marginTop: -25, fontSize: "25px", fontWeight: "bold" }}>
              Login
            </p>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  marginTop: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#EDEDED",
                    height: 30,
                    width: 180,
                    fontWeight: "lighter",
                    color: "#CACACA",
                  }}
                  sx={{ textTransform: "none" }}
                  variant="text"
                  onClick={logi1}
                >
                  Mobile
                </Button>
                <Button
                  style={{
                    backgroundColor: "#EDEDED",
                    height: 30,
                    width: 180,
                    fontWeight: "bolder",
                    color: "black",
                  }}
                  sx={{ textTransform: "none" }}
                  variant="text"
                >
                  Email
                </Button>
              </Box>
              <Box
                sx={{
                  marginTop: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  style={{
                    width: "180px",
                    height: "2px",
                    marginLeft: "180px",
                  }}
                  src={mylogo6}
                  alt="Something is wrong"
                />
              </Box>
              <Box
                sx={{
                  marginTop: 5,
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Person3OutlinedIcon
                  style={{
                    border: "1px solid #CACACA",
                    borderRadius: "10px",
                    height: "18px",
                    width: "18px",
                    marginLeft: 3,
                    backgroundColor: "#EDEDED",
                  }}
                />
                <p style={{ color: "#CACACA", marginTop: -2, marginLeft: 3 }}>
                  Email Address
                </p>
              </Box>
              <TextField
                type="email"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="off"
                variant="outlined"
                autoFocus
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onBlur={handleBlur}
                style={{ color: "#CACACA", marginTop: -5, borderRadius: 10 }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
              {errors.email && touched.email ? (
                <p
                  style={{
                    fontSize: "0.7rem",
                    marginLeft: 10,
                    marginTop: -25,
                    color: "#b22b27",
                  }}
                >
                  {errors.email}
                </p>
              ) : null}
              <Box
                sx={{
                  marginTop: 2,
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <LockOutlinedIcon
                  style={{
                    border: "1px solid #CACACA",
                    borderRadius: "10px",
                    height: "18px",
                    width: "18px",
                    marginLeft: 3,
                    backgroundColor: "#EDEDED",
                  }}
                />
                <p style={{ color: "#CACACA", marginTop: -2, marginLeft: 3 }}>
                  Password
                </p>
              </Box>
              <TextField
                margin="normal"
                type="password"
                required
                fullWidth
                name="password"
                id="password"
                autoComplete="email"
                variant="outlined"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                onBlur={handleBlur}
                autoFocus
                style={{ color: "#CACACA", marginTop: -5, borderRadius: 10 }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
              {errors.password && touched.password ? (
                <p
                  style={{
                    fontSize: "0.7rem",
                    marginLeft: 10,
                    marginTop: -25,
                    color: "#b22b27",
                  }}
                >
                  {errors.password}
                </p>
              ) : null}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                style={{
                  marginLeft: 75,
                  backgroundColor: "#123C79",
                  width: "200px",
                  marginTop: 35,
                }}
                onClick={login}
              >
                Login
              </Button>
              <Button
                style={{
                  marginTop: -15,
                  marginLeft: 25,
                  height: 30,
                  width: 300,
                  color: "#CACACA",
                  fontWeight: "lighter",
                }}
                sx={{ textTransform: "none" }}
                variant="text"
              >
                Forgot Password?
              </Button>
              <Button
                style={{
                  marginTop: 30,
                  marginLeft: 30,
                  height: 30,
                  width: 300,
                  color: "#CACACA",
                  fontWeight: "lighter",
                }}
                sx={{ textTransform: "none" }}
                variant="text"
                onClick={newuser}
              >
                New user?<b style={{ color: "#123C79" }}> Register Now</b>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
