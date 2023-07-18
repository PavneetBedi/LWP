import React from "react";
import mylogo from "./pics/cmp1.png";
import mylogo3 from "./pics/cmp2.png";
import mylogo4 from "./pics/arrowl.png";
import mylogo5 from "./pics/cmp3.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Please enter your email"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password"),
  mobileno: Yup.string().min(10, "Mobile number must be at least 10 characters").required("Please enter your mobile number"),
});

function Login() {
  const navigate = useNavigate();

  const logi2 = () => {
    navigate("/login");
  };
  const { handleSubmit, handleChange, values, errors, touched,handleBlur} = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobileno: "",
    },
    validationSchema:signUpSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:9595/register", {
          email: values.email,
          password: values.password,
          mobileno: values.mobileno,
        });

        console.log(response.data);
        navigate("/email");
      } catch (error) {
        console.error(error);
      }
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
             Register
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
                value={values.email}
                onChange={handleChange}  
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
                value={values.password}
                onChange={handleChange}
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
              <p style={{ color: "#CACACA",marginTop:10}}>
                Enter mobile Number
              </p>
              <TextField
                type="number"
                margin="normal"
                required
                fullWidth
                id="mobileno"
                name="mobileno"
                autoComplete="off"
                variant="outlined"
                autoFocus
                value={values.mobileno}
                onChange={handleChange} 
                onBlur={handleBlur}           
                style={{ color: "#CACACA", marginTop: -5, borderRadius: 10 }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
              {errors.mobileno && touched.mobileno ? (
                <p
                  style={{
                    fontSize: "0.7rem",
                    marginLeft: 10,
                    marginTop: -25,
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
                  marginLeft: 65,
                  backgroundColor: "#123C79",
                  width: "200px",
                  marginTop: 35,
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
