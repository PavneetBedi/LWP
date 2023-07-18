import React from "react";
import mylogo from "./pics/cmp1.png";
import mylogo3 from "./pics/cmp2.png";
import mylogo4 from "./pics/arrowl.png";
import mylogo5 from "./pics/cmp3.png";
import mylogo6 from "./pics/cmp4.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { loginUpSchema } from "./schemas/logi.jsx";
import { useFormik } from "formik";

const initialValues = {
  mobileno: "",
};

function Login() {
  const navigate = useNavigate();

  const email = () => {
    navigate("/email");
  };
  const logi = () => {
    navigate("/home");
  };
  const newuser = () => {
    navigate("/register");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginUpSchema,
      onSubmit: (values, action) => {
        if (values) {
          navigate("/Otp");
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
            opacity: 1,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "657px",
            backgroundColor: "#F5F6FA",
          }}
        >
          <img
            style={{
              marginTop: "150px",
              marginLeft: "25px",
              marginRight: "15px",
              width: "749px",
              height: "350px",
              backgroundColor: "#F5F6FA",
            }}
            src={mylogo}
            alt="Something is wrong"
          />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            backgroundColor: "#ECEFF4",
            opacity: 1,
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
              onClick={logi}
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
                    fontWeight: "bolder",
                    color: "black",
                  }}
                  sx={{ textTransform: "none" }}
                  variant="text"
                >
                  Mobile
                </Button>
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
                  onClick={email}
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
                  }}
                  src={mylogo6}
                  alt="Something is wrong"
                />
              </Box>

              <p
                style={{
                  marginLeft: 20,
                  color: "#CACACA",
                  fontWeight: "lighter",
                  textAlign: "left",
                  textAlignLast: "center",
                }}
              >
                We will send a code <b>(via sms)</b> to your mobile number
              </p>
              <p style={{ marginTop: 55, fontWeight: "bold" }}>
                Enter mobile Number
              </p>
              <TextField
                placeholder="Mobile Number"
                type="number"
                full width
                name="mobileno"
                id="mobileno"
               
                style={{ width: "360px" }}
                variant="outlined"
                value={values.mobileno}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobileno && touched.mobileno ? (
                <p
                  style={{
                    fontSize: "0.7rem",
                    marginLeft: 10,
                    marginTop: -15,
                    color: "#b22b27",
                  }}
                >
                  {errors.mobileno}
                </p>
              ) : null}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                style={{
                  marginLeft: 85,
                  backgroundColor: "#123C79",
                  width: "200px",
                  marginTop: 40,
                }}
              >
                Send OTP
              </Button>

              <Button
                style={{
                  marginTop: 20,
                  marginLeft: 50,
                  height: 30,
                  width: 300,
                  color: "#CACACA",
                  fontWeight: "lighter"
                }}
                onClick={newuser}
                sx={{ textTransform: "none" }}
                variant="text"
              >
                New user?<b style={{ color: "blue" }}>Register Now</b>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
