import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
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
import mylogo14 from "./pics/Path3.png";
import mylogo15 from "./pics/cmp30.png";
import mylogo16 from "./pics/cmp31.png";
import mylogo17 from "./pics/cmp35.png";
import Axios from "axios";
import { useLocation} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
function Trainerdetails() {
  const initialValues = {
    trainername: "",
    DatePicker: "",
    onboarddate: "",
    experience: "",
    email: "",
    ContactNo: "",
    Gender: "",
    Address: "",
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedUserId = queryParams.get("userId");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const validationSchema = yup.object().shape({
    trainername: yup.string().required("Please enter trainername"),
    DatePicker: yup.string().required("Please enter DateofBirth"),
    onboarddate: yup.string().required("Please enter Onboard Date"),
    experience: yup.string().required("Please enter experience"),
    email: yup
      .string()
      .email("Email is invalid")
      .required("Please enter your email"),
    ContactNo: yup
      .string("Contact No must be of 10 digits")
      .min(10)
      .max(10)
      .required("Please enter Contact No"),
    Gender: yup.string().required("Please enter Gender"),
    Address: yup.string().required("Please enter Address"),
  });

  const [trainername, settrainername] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [onboarddate, setonboarddate] = useState("");
  const [experience, setexperience] = useState("");
  const [email, setemail] = useState("");
  const [contactno, setcontactno] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");

  // const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   trainername: "",
  //   DatePicker: "",
  //   onboarddate: "",
  //   experience: "",
  //   email: "",
  //   ContactNo: "",
  //   Gender: "",
  //   Address: "",
  // });

  useEffect(() => {
    if (selectedUserId) {
      // Fetch company details and populate the form
      Axios.get(`http://localhost:9595/trainers/${selectedUserId}`)
        .then((response) => {
          const { data } = response;
          settrainername(data.trainername);
          setdateofbirth(data.dateofbirth);
          setonboarddate(data.onboarddate);
          setexperience(data.experience);
          setemail(data.email);
          setcontactno(data.contactno);
          setgender(data.gender);
          setaddress(data.address);
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }
  }, [selectedUserId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      trainername: trainername,
      dateofbirth: dateofbirth,
      onboarddate: onboarddate,
      experience: experience,
      email: email,
      contactno: contactno,
      gender:gender,
      address: address,
    };

    if (selectedUserId) {
      // Update existing company
      Axios.post(`http://localhost:9595/trainers/${selectedUserId}`, data)
        .then((response) => {
          console.log(response);
          if (response.data) {
            navigate("/trainerprofile");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    } else {
      // Create new company
      Axios.post("http://localhost:9595/trainers", data)
        .then((response) => {
          console.log(response);
          if (response.data) {
           navigate("/trainerprofilesuccessfully");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }

    resetForm();
  };

  const resetForm = () => {
    settrainername("");
    setdateofbirth("");
    setonboarddate("");
    setexperience("");
    setemail("");
    setcontactno("");
    setgender("");
    setaddress("");
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const [error, setError] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (formData.onboarddate < formData.DatePicker) {
  //     setError("onboarddate cannot be earlier than Date of Birth");
  //   } else {
  //     console.log(formData);
  //     //const post = { formData: formData }
  //     try {
  //       const res = await axios.post(
  //         "http://localhost:9595/trainers",
  //         formData
  //       );
  //       console.log(res.data);
  //       navigate("/trainerprofilesuccessfully");
  //       //alert("Leave submitted successfully!!")
  //       setOpen(true);
  //     } catch (e) {
  //       alert(e);
  //       setOpen(false);
  //     }
  //     setError("");
  //     // setFormData({
  //     //   name: "",
  //     //   startdate: "",
  //     //   enddate: "",
  //     //   reason: "",
  //     //   type: "",
  //     // });
  //   }
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);

  //   Axios.post("http://localhost:9595/trainers", formData)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data) {
  //         navigate("/trainerprofilesuccessfully");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the network request:", error);
  //     });
  //   setFormData({
  //     trainername: "",
  //     DatePicker: "",
  //     onboarddate: "",
  //     experience: "",
  //     email: "",
  //     ContactNo: "",
  //     Gender: "",
  //     Address: "",
  //   });
  // };
 
  // const handleSubmit = (values) => {
  //   if (values) {
  //     navigate("/trainerprofilesuccessfully");
  //   }
  //   console.log("values", values);
  // };

  const navigate = useNavigate();

  const pop = () => {
    navigate("/trainerdetails");
  };
  const logi = () => {
    navigate("/dashboard");
  };
  const logi1 = () => {
    navigate("/trainerprofile");
  };
  const logi2 = () => {
    navigate("/trainingprofile");
  };
  const logi3 = () => {
    navigate("/companyprofile");
  };

  return (
    <>
      <Grid container style={{ backgroundColor: "#F7F7F7" }}>
        <Grid item xs={12} style={{ marginTop: -35 }}>
          <Item>
            <p
              style={{
                fontSize: "35px",
                fontWeight: "bolder",
                color: "#2445A4",
                marginLeft: 40,
                cursor: "pointer",
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
                  cursor: "pointer",
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
                  cursor: "pointer",
                }}
                src={mylogo1}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: 20,
                  width: "25px",
                  height: "20px",
                  cursor: "pointer",
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
                  cursor: "pointer",
                }}
                src={mylogo3}
                alt="Something is wrong"
              />
              <img
                style={{
                  marginLeft: 20,
                  width: "35px",
                  height: "30px",
                  cursor: "pointer",
                }}
                src={mylogo9}
                alt="Something is wrong"
              />
            </p>
          </Item>
        </Grid>
        <Grid item xs={1.5} style={{ marginTop: -30 }}>
          <Item style={{ height: 597 }}>
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
                style={{
                  color: "#2445A4",
                  marginLeft: 9,
                  marginTop: 15,
                  fontSize: "12px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={logi2}
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
        <Grid xs={10}>
          <Item
            style={{
              marginTop: -20,
              marginLeft: "50px",
              borderRadius: 10,
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              
            >
              <Form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{
                      width: "10px",
                      height: "15px",
                      marginLeft: 15,
                      marginTop: 15,
                      cursor: "pointer",
                    }}
                    onClick={pop}
                    src={mylogo14}
                    alt="Something is wrong"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      alignContent: "center",
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "18px",
                      marginLeft: 425,
                    }}
                  >
                    Add Details
                  </p>
                </div>
                <img
                  style={{
                    marginTop: -15,
                    marginLeft: 460,
                  }}
                  src={mylogo17}
                  alt="Something is wrong"
                />
                <p
                  style={{
                    color: "#444444",
                    fontSize: 10,
                    marginLeft: 458,
                    marginTop: -5,
                  }}
                >
                  Add Profile photo
                </p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <label
                    htmlFor="trainername"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                      marginTop: -20,
                    }}
                  >
                    Trainer Name
                  </label>
                  <label
                    htmlFor="DateofBirth"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 350,
                      color: "#000000",
                      marginTop: -20,
                    }}
                  >
                    Date of Birth
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="trainername"
                      id="trainername"
                      value={trainername}
                      onChange={(event) => {
                        settrainername(event.target.value);
                      }}
                      placeholder="Manan Jindal"
                      className="form-control"
                      style={{
                        marginLeft: 150,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 150, marginTop: 2 }}>
                      <ErrorMessage name="trainername" />
                    </p>
                  </div>
                  <div
                    className="col-md-12 mt-4"
                    style={{ marginLeft: 140, height: "30px" }}
                  >
                    <Field
                      type="date"
                      name="dateofbirth"
                      id="dateofbirth"
                      value={dateofbirth}
                      onChange={(event) => {
                        setdateofbirth(event.target.value);
                      }}
                      className="form-control"
                      style={{
                        marginLeft: -2,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />

                    <p style={{ color: "red", marginLeft: 0, marginTop: 2 }}>
                      <ErrorMessage name="dateofbirth" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <label
                    htmlFor="Onboard Date"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Onboard Date
                  </label>
                  <label
                    htmlFor="CompanyCode"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 350,
                      color: "#000000",
                    }}
                  >
                    Experience
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    className="col-md-12 mt-4"
                    style={{ marginLeft: 150, height: "30px" }}
                  >
                    <Field
                      type="date"
                      name="onboarddate"
                      id="onboarddate"
                      value={onboarddate}
                      onChange={(event) => {
                        setonboarddate(event.target.value);
                      }}
                      className="form-control"
                      style={{
                        marginLeft: -2,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 0, marginTop: 2 }}>
                      <ErrorMessage name="onboarddate" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="number"
                      name="experience"
                      id="experience"
                      value={experience}
                      onChange={(event) => {
                        setexperience(event.target.value);
                      }}
                      placeholder="10yrs"
                      className="form-control"
                      style={{
                        marginLeft: 145,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 190, marginTop: 2 }}>
                      <ErrorMessage name="experience" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <label
                    htmlFor="Email Address"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Email Address
                  </label>
                  <label
                    htmlFor="Contact No."
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 345,
                      color: "#000000",
                    }}
                  >
                    Contact No.
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(event) => {
                        setemail(event.target.value);
                      }}
                      placeholder="mananjindal452gmail.com"
                      className="form-control"
                      style={{
                        marginLeft: 150,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 150, marginTop: 2 }}>
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="number"
                      name="contactno"
                      id="contactno"
                      value={contactno}
                      onChange={(event) => {
                        setcontactno(event.target.value);
                      }}
                      placeholder="91 236 235 258"
                      className="form-control"
                      style={{
                        marginLeft: 140,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 140, marginTop: 2 }}>
                      <ErrorMessage name="contactno" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <label
                    htmlFor="Gender"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Gender
                  </label>
                  <label
                    htmlFor="Address"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 400,
                      color: "#000000",
                    }}
                  >
                    Address
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="gender"
                      id="gender"
                      value={gender}
                      onChange={(event) => {
                        setgender(event.target.value);
                      }}
                      placeholder="Male"
                      className="form-control"
                      style={{
                        marginLeft: 150,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 150, marginTop: 2 }}>
                      <ErrorMessage name="gender" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      value={address}
                      onChange={(event) => {
                        setaddress(event.target.value);
                      }}
                      placeholder="Sector 34, Opp to market Chandigarh"
                      className="form-control"
                      style={{
                        marginLeft: 140,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 140, marginTop: 2 }}>
                      <ErrorMessage name="address" />
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", displayDirection: "row" }}>
                  <p
                    style={{
                      marginLeft: 150,
                      fontWeight: "bolder",
                      color: "#000000",
                      marginTop: 15,
                    }}
                  >
                    Attachments
                  </p>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      marginLeft: 10,
                      marginTop: 18,
                      cursor: "pointer",
                    }}
                    src={mylogo15}
                    alt="Something is wrong"
                  />
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: -22,
                      marginTop: 20,
                      cursor: "pointer",
                    }}
                    src={mylogo16}
                    alt="Something is wrong"
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    sx={{ textTransform: "none" }}
                    style={{
                      backgroundColor: "#2445A4",
                      color: "#FFFFFF",
                      height: "30px",
                      width: "250px",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    sx={{ textTransform: "none" }}
                    style={{
                      color: "#AAAAAA",
                      height: "30px",
                      width: "250px",
                      marginTop: 10,
                    }}
                    variant="text"
                    type="submit"
                    onClick={pop}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Formik>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Trainerdetails;
