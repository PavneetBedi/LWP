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
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { otpUpSchema } from "./schemas/otp.jsx";
import { useFormik } from "formik";

const initialValues = {
  otpno: "",
  otpno1: "",
  otpno2: "",
  otpno3: "",
  otpno4: "",
};
function Login() {
  const [bgcolor, setbgcolor] = useState("#EAEAEA");
  const navigate = useNavigate();

  const logi = () => {
    navigate("/login");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: otpUpSchema,
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
                  marginLeft: 50,
                  color: "#CACACA",
                  fontWeight: "lighter",
                  textAlign: "left",
                  height: 30,
                  width: 253,
                  fontSize: 15,
                  textAlignLast: "center",
                }}
              >
                We sent you <b>One Time Password</b> to your registered mobile
                number<br></br>
                <b>+91 8899663513</b>
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  marginTop: 80,
                  textAlign: "center",
                  color: "#123C79",
                }}
              >
                Please Enter OTP
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  min="0"
                  max="9"
                  name="otpno"
                  id="otpno"
                  value={values.otpno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="*"
                  onClick={() => {
                    setbgcolor("white");
                  }}
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #123C79",
                    fontSize: "20px",
                    fontWeight: "300",
                    textAlign: "center",
                    height: "40px",
                    width: "35px",
                    margin: "10px",
                    fontFamily: "'Lato',sans-serif",
                    backgroundColor: bgcolor,
                  }}
                />
                {errors.otpno && touched.otpno ? (
                  <p
                    style={{
                      fontSize: "0.5rem",
                      marginLeft: 10,
                      marginTop: -15,
                      color: "#b22b27",
                    }}
                  >
                    {errors.otpno}
                  </p>
                ) : null}
                <input
                  type="number"
                  min="0"
                  max="9"
                  name="otpno1"
                  id="otpno1"
                  value={values.otpno1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="*"
                  onClick={() => {
                    setbgcolor("white");
                  }}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #EAEAEA",
                    fontSize: "20px",
                    fontWeight: "300",
                    textAlign: "center",
                    height: "40px",
                    width: "35px",
                    margin: "10px",
                    fontFamily: "'Lato',sans-serif",
                    backgroundColor: bgcolor,
                  }}
                />
                {errors.otpno1 && touched.otpno1 ? (
                  <p
                    style={{
                      fontSize: "0.5rem",
                      marginLeft: 10,
                      marginTop: -15,
                      color: "#b22b27",
                    }}
                  >
                    {errors.otpno1}
                  </p>
                ) : null}
                <input
                  type="number"
                  min="0"
                  max="9"
                  placeholder="*"
                  name="otpno2"
                  id="otpno2"
                  value={values.otpno2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={() => {
                    setbgcolor("white");
                  }}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #EAEAEA",
                    fontSize: "20px",
                    fontWeight: "300",
                    textAlign: "center",
                    height: "40px",
                    width: "35px",
                    margin: "10px",
                    fontFamily: "'Lato',sans-serif",
                    backgroundColor: bgcolor,
                  }}
                />
                {errors.otpno2 && touched.otpno2 ? (
                  <p
                    style={{
                      fontSize: "0.5rem",
                      marginLeft: 10,
                      marginTop: -15,
                      color: "#b22b27",
                    }}
                  >
                    {errors.otpno2}
                  </p>
                ) : null}
                <input
                  type="number"
                  min="0"
                  max="9"
                  name="otpno3"
                  id="otpno3"
                  value={values.otpno3}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="*"
                  onClick={() => {
                    setbgcolor("white");
                  }}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #EAEAEA",
                    fontSize: "20px",
                    fontWeight: "300",
                    textAlign: "center",
                    height: "40px",
                    width: "35px",
                    margin: "10px",
                    fontFamily: "'Lato',sans-serif",
                    backgroundColor: bgcolor,
                  }}
                />
                {errors.otpno3 && touched.otpno3 ? (
                  <p
                    style={{
                      fontSize: "0.5rem",
                      marginLeft: 10,
                      marginTop: -15,
                      color: "#b22b27",
                    }}
                  >
                    {errors.otpno3}
                  </p>
                ) : null}
                <input
                  type="number"
                  min="0"
                  max="9"
                  name="otpno4"
                  id="otpno4"
                  value={values.otpno4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="*"
                  onClick={() => {
                    setbgcolor("white");
                  }}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #EAEAEA",
                    fontSize: "20px",
                    fontWeight: "300",
                    textAlign: "center",
                    height: "40px",
                    width: "35px",
                    margin: "10px",
                    color: "black",
                    fontFamily: "'Lato',sans-serif",
                    backgroundColor: bgcolor,
                  }}
                />
                {errors.otpno4 && touched.otpno4 ? (
                  <p
                    style={{
                      fontSize: "0.5rem",
                      marginLeft: 10,
                      marginTop: -15,
                      color: "#b22b27",
                    }}
                  >
                    {errors.otpno4}
                  </p>
                ) : null}
              </Box>

              <Button
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  height: 30,
                  width: 300,
                  color: "#CACACA",
                  fontWeight: "lighter",
                }}
                sx={{ textTransform: "none" }}
                variant="text"
              >
                Didn't get OTP?<b style={{ color: "#123C79" }}>Resend OTP</b>
              </Button>
              <Button
                type="submit"
                variant="contained"
                onSubmit={handleSubmit}
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                style={{
                  marginLeft: 75,
                  backgroundColor: "#123C79",
                  width: "200px",
                  marginTop: 25,
                }}
              >
                Verify and Proceed
              </Button>

              <Button
                style={{
                  marginTop: 10,
                  marginLeft: 30,
                  height: 30,
                  width: 300,
                  color: "#CACACA",
                  fontWeight: "lighter",
                }}
                sx={{ textTransform: "none" }}
                variant="text"
              >
                New user?<b style={{ color: "#123C79" }}>Register Now</b>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
