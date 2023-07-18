import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
import mylogo7 from "./pics/cmp10.png";
import mylogo8 from "./pics/cmp36.png";
import mylogo9 from "./pics/cmp12.png";
import mylogo14 from "./pics/Path3.png";
import * as yup from "yup";
import { loadCSS } from "fg-loadcss";
import axios from "axios";
import Axios from "axios";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocation } from "react-router-dom";

const initialValues = {
  trainer_id: "",
  companyname: "",
  startdate: "",
  enddate: "",
  email: "",
  contactno: "",
  techstack: "",
  duration: "",
};

// eslint-disable-next-line
const node = loadCSS(
  "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
  // Inject before JSS
  document.querySelector("#font-awesome-css") || document.head.firstChild
);

function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedUserId = queryParams.get("userId");

  const validationSchema = yup.object().shape({
    trainer_id: yup.string().required("Please enter Trainer Name"),
    companyname: yup.string().required("Please enter Company Name"),
    startdate: yup.string().required("Please enter Founded Year"),
    enddate: yup.string().required("Please enter CompanyCode"),
    email: yup
      .string()
      .email("Email is invalid")
      .required("Please enter your email"),
    contactno: yup
      .string("Contact No must be of 10 digits")
      .min(10)
      .max(10)
      .required("Please enter Contact No"),
    techstack: yup.string().required("Please enter Tech Stack"),
    duration: yup.string().required("Please enter duration"),
  });

  // const handleSubmit = (values) => {
  //   if (values) {
  //     navigate("/screen19");
  //   }
  //   console.log("values", values);
  // };
  // const [formData, setFormData] = useState({
  //   trainername: "",
  //   companyname: "",
  //   startdate: "",
  //   enddate: "",
  //   email: "",
  //   contactno: "",
  //   techstack: "",
  //   duration: "",
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const [trainer_id, settrainer_id] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [email, setemail] = useState("");
  const [contactno, setcontactno] = useState("");
  const [techstack, settechstack] = useState("");
  const [duration, setduration] = useState("");

  const [error, setError] = useState("");

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedUserId) {
      // Fetch company details and populate the form
      Axios.get(`http://localhost:9595/training/${selectedUserId}`)
        .then((response) => {
          const { data } = response;
          settrainer_id(data.trainer_id);
          setcompanyname(data.companyname);
          setstartdate(data.startdate);
          setenddate(data.enddate);
          setemail(data.email);
          setcontactno(data.contactno);
          settechstack(data.techstack);
          setduration(data.duration);
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }
  }, [selectedUserId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      trainer_id: selectedOption?.id || "",
      companyname: companyname,
      startdate: startdate,
      enddate: enddate,
      email: email,
      contactno: contactno,
      techstack: techstack,
      duration: duration,
    };

    if (selectedUserId) {
      // Update existing company
      Axios.post(`http://localhost:9595/training/${selectedUserId}`, data)
        .then((response) => {
          console.log(response);
          if (response.data) {
            navigate("/trainingprofile");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    } else {
      // Create new company
      Axios.post("http://localhost:9595/training", data)
        .then((response) => {
          console.log(response);
          if (response.data) {
            navigate("/trainingprofilesuccessfully");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }

    resetForm();
    //setSelectedOption(null);
  };

  const resetForm = () => {
    settrainer_id("");
    setcompanyname("");
    setstartdate("");
    setenddate("");
    setemail("");
    setcontactno("");
    settechstack("");
    setduration("");
  };

  const navigate = useNavigate();

  const pop = () => {
    navigate("/trainingdetails");
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
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:9595/trainers?q=${inputValue}`
      );
      setOptions(response.data);
    }

    fetchData();
  }, [inputValue]);


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (formData.enddate < formData.startdate) {
  //     setError("End date cannot be earlier than start date");
  //   } else {
  //     //console.log(formData);
  //     const formDataWithTrainer = {
  //       ...formData,
  //       trainername: selectedOption?.id || "",
  //     };
  //     Axios.post("http://localhost:9595/training", formDataWithTrainer)
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data) {
  //           navigate("/screen19");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("There was a problem with the network request:", error);
  //       });
  //     setFormData({
  //       trainername: "",
  //       companyname: "",
  //       startdate: "",
  //       enddate: "",
  //       email: "",
  //       contactno: "",
  //       techstack: "",
  //       duration: "",
  //     });
  //     setSelectedOption(null);
  //   }
  // };



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
                    height: "8px",
                    width: "350px",
                  },
                }}
              />
              <Button
                style={{
                  backgroundImage: `url(${mylogo})`,
                  height: "30px",
                  marginTop: -15,
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
                  width: "35px",
                  height: "30px",
                  borderRadius: 30,
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
                  fontWeight: "bolder",
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
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 15,
                }}
                src={mylogo7}
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
                src={mylogo8}
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
              marginTop: 20,
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

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <label
                    htmlFor="trainer_id"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Trainer Name
                  </label>
                  <label
                    htmlFor="companyname"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 370,
                      color: "#000000",
                    }}
                  >
                    Company Name
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Autocomplete
                      options={options}
                      getOptionLabel={(option) => option.trainername}
                      value={selectedOption}
                      onChange={(event, value) => setSelectedOption(value)}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) =>
                        setInputValue(newInputValue)
                      }
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Manan Jindal" />
                      )}
                      style={{
                        marginLeft: 150,
                        width: "300px",
                        marginTop: 5,
                        height: "20px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    {/* <Field
                      type="text"
                      name="trainername"
                      value={formData.trainername}
                      onChange={handleChange}
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
                    /> */}
                    <p style={{ color: "red", marginLeft: 150, marginTop: 2 }}>
                      <ErrorMessage name="trainer_id" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="companyname"
                      value={companyname}
                      onChange={(event) => {
                        setcompanyname(event.target.value);
                      }}
                      placeholder="TedX"
                      className="form-control"
                      style={{
                        marginLeft: 160,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 160, marginTop: 2 }}>
                      <ErrorMessage name="companyname" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <label
                    htmlFor="startdate"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Start Date
                  </label>
                  <label
                    htmlFor="enddate"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 395,
                      color: "#000000",
                    }}
                  >
                    End Date
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="date"
                      name="startdate"
                      value={startdate}
                      onChange={(event) => {
                        setstartdate(event.target.value);
                      }}
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
                      <ErrorMessage name="startdate" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="date"
                      name="enddate"
                      error={error !== ""}
                      helperText={error}
                      value={enddate}
                      onChange={(event) => {
                        setenddate(event.target.value);
                      }}
                      className="form-control"
                      style={{
                        marginLeft: 160,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 160, marginTop: 2 }}>
                      <ErrorMessage name="enddate" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
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
                      marginLeft: 365,
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
                      value={contactno}
                      onChange={(event) => {
                        setcontactno(event.target.value);
                      }}
                      placeholder="91 236 235 258"
                      className="form-control"
                      style={{
                        marginLeft: 160,
                        width: "300px",
                        marginTop: 5,
                        height: "30px",
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA",
                      }}
                    />
                    <p style={{ color: "red", marginLeft: 160, marginTop: 2 }}>
                      <ErrorMessage name="contactno" />
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <label
                    htmlFor="techstack"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Tech Stack
                  </label>
                  <label
                    htmlFor="duration"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 395,
                      color: "#000000",
                    }}
                  >
                    Duration- Full day/ Half day
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="techstack"
                      value={techstack}
                      onChange={(event) => {
                        settechstack(event.target.value);
                      }}
                      placeholder=""
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
                      <ErrorMessage name="techstack" />
                    </p>
                  </div>
                  <div
                    className="col-md-12 mt-4"
                    style={{ marginLeft: 15, height: "30px" }}
                  >
                    <Field
                      type="text"
                      name="duration"
                      value={duration}
                      onChange={(event) => {
                        setduration(event.target.value);
                      }}
                      placeholder="Full Day"
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
                      <ErrorMessage name="duration" />
                    </p>
                  </div>
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
                      marginTop: 50,
                      marginBottom: 20,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Save
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

export default Dashboard;
