import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import mylogo from "./pics/search.png";
import mylogo1 from "./pics/cmp5.png";
import mylogo2 from "./pics/cmp6.png";
import mylogo3 from "./pics/cmp7.jpg";
import mylogo4 from "./pics/cmp7.png";
import mylogo5 from "./pics/cmp19.png";
import mylogo6 from "./pics/cmp20.png";
import mylogo7 from "./pics/cmp10.png";
import mylogo8 from "./pics/cmp11.png";
import mylogo9 from "./pics/cmp12.png";
import mylogo14 from "./pics/Path3.png";
import mylogo15 from "./pics/cmp30.png";
import mylogo16 from "./pics/cmp31.png";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
//import axios from 'axios';
import { useLocation} from 'react-router-dom';

function Companydetails() {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedUserId = queryParams.get("userId");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  

  const [companyname, setCompanyname] = useState("");
  const [ownername, setOwnername] = useState("");
  const [foundedyear, setFoundedyear] = useState("");
  const [companycode, setCompanycode] = useState("");
  const [emailid, setEmailid] = useState("");
  const [contactno, setContactno] = useState("");
  const [noofemployees, setNoofemployees] = useState("");
  const [onboarddate, setOnboarddate] = useState("");
  
  useEffect(() => {
    if (selectedUserId) {
      // Fetch company details and populate the form
      Axios.get(`http://localhost:9595/companies/${selectedUserId}`)
        .then((response) => {
          const { data } = response;
          setCompanyname(data.companyname);
          setOwnername(data.ownername);
          setFoundedyear(data.foundedyear);
          setCompanycode(data.companycode);
          setEmailid(data.emailid);
          setContactno(data.contactno);
          setNoofemployees(data.noofemployees);
          setOnboarddate(data.onboarddate);
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }
  }, [selectedUserId]);



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     companyname: companyname,
  //     ownername: ownername,
  //     foundedyear: foundedyear,
  //     companycode: companycode,
  //     emailid: emailid,
  //     contactno: contactno,
  //     noofemployees: noofemployees,
  //     onboarddate: onboarddate,
  //   };

  //   Axios.post("http://localhost:9595/companies", data)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data) {
  //         navigate("/screen19");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the network request:", error);
  //     });

  //   setCompanyname("");
  //   setOwnername("");
  //   setFoundedyear("");
  //   setCompanycode("");
  //   setEmailid("");
  //   setContactno("");
  //   setNoofemployees("");
  //   setOnboarddate("");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      companyname: companyname,
      ownername: ownername,
      foundedyear: foundedyear,
      companycode: companycode,
      emailid: emailid,
      contactno: contactno,
      noofemployees: noofemployees,
      onboarddate: onboarddate,
    };

    if (selectedUserId) {
      // Update existing company
      Axios.post(`http://localhost:9595/companies/${selectedUserId}`, data)
        .then((response) => {
          console.log(response);
          if (response.data) {
            navigate("/companyprofile");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    } else {
      // Create new company
      Axios.post("http://localhost:9595/companies", data)
        .then((response) => {
          console.log(response);
          if (response.data) {
           navigate("/screen19");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
        });
    }

    resetForm();
  };

  const resetForm = () => {
    setCompanyname("");
    setOwnername("");
    setFoundedyear("");
    setCompanycode("");
    setEmailid("");
    setContactno("");
    setNoofemployees("");
    setOnboarddate("");
  };
  

  const navigate = useNavigate();

  const pop = () => {
    navigate("/popup");
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
        <Grid item xs={1.5} style={{ marginTop: -15, cursor: "pointer" }}>
          <Item style={{ height: 586 }}>
            <div style={{ display: "flex", displayDirection: "row" }}>
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: 15,
                  marginTop: 30,
                  cursor: "pointer",
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
            <div
              style={{ display: "flex", displayDirection: "row" }}
              onClick={pop}
            >
              <img
                style={{
                  width: "35px",
                  height: "30px",
                  marginLeft: 1,
                  marginTop: 15,
                  cursor: "pointer",
                }}
                onClick={pop}
                src={mylogo4}
                alt="Something is wrong"
              />
              <img
                style={{
                  width: "25px",
                  height: "30px",
                  marginLeft: -21,
                  marginTop: 15,
                  cursor: "pointer",
                }}
                src={mylogo6}
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
                  cursor: "pointer",
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
                onClick={logi1}
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
                  cursor: "pointer",
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
                onClick={logi2}
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
            <form onSubmit={handleSubmit}>
            
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
                    htmlFor="CompanyName"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Company Name
                  </label>
                  <label
                    htmlFor="ownername"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 350,
                      color: "#000000",
                    }}
                  >
                    Owner Name
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    
                    <TextField
                      type="text"
                      margin="normal"
                      required
                      placeholder="TedX Pvt. Ltd"
                      id="companyname"
                      name="companyname"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={companyname}
                      onChange={(event) => {
                        setCompanyname(event.target.value);
                      }}
                      style={{marginLeft:150,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
                  </div>
                  <div className="col-md-12 mt-4">
                  <TextField
                      type="text"
                      margin="normal"
                      required
                      placeholder="Rohan Khurana"
                      id="ownername"
                      name="ownername"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={ownername}
                      onChange={(event) => {
                        setOwnername(event.target.value);
                      }}
                      style={{marginLeft:165,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
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
                    htmlFor="foundedyear"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    Founded Year
                  </label>
                  <label
                    htmlFor="companycode"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 365,
                      color: "#000000",
                    }}
                  >
                    Company Code
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    
                    <TextField
                      type="text"
                      margin="normal"
                      required
                      placeholder="April 2009"
                      id="foundedyear"
                      name="foundedyear"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={foundedyear}
                      onChange={(event) => {
                        setFoundedyear(event.target.value);
                      }}
                      style={{marginLeft:150,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
                  </div>
                  <div className="col-md-12 mt-4">
                    
                    <TextField
                      type="text"
                      margin="normal"
                      required
                      placeholder="AE345TH"
                      id="companycode"
                      name="companycode"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={companycode}
                      onChange={(event) => {
                        setCompanycode(event.target.value);
                      }}
                      style={{marginLeft:165,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
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
                      marginLeft: 360,
                      color: "#000000",
                    }}
                  >
                    Contact No.
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    
                    <TextField
                      type="email"
                      margin="normal"
                      required
                      placeholder="Tedxpvtco09@gmail.com"
                      id="emailid"
                      name="emailid"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={emailid}
                      onChange={(event) => {
                        setEmailid(event.target.value);
                      }}
                      style={{marginLeft:150,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
                  </div>
                  <div className="col-md-12 mt-4">
                  <TextField
                      type="text"
                      margin="normal"
                      required
                      placeholder="7508803928"
                      id="contactno"
                      name="contactno"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={contactno}
                      onChange={(event) => {
                        setContactno(event.target.value);
                      }}
                      style={{marginLeft:165,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
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
                    htmlFor="noofemployees"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 150,
                      color: "#000000",
                    }}
                  >
                    No. of Employess
                  </label>
                  <label
                    htmlFor="Onboard Date"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      marginLeft: 340,
                      color: "#000000",
                    }}
                  >
                    Onboard Date
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="col-md-12 mt-4">
                    
                    <TextField
                      type="number"
                      margin="normal"
                      required
                      placeholder="Tedxpvtco09@gmail.com"
                      id="noofemployees"
                      name="noofemployees"
                      autoComplete="off"
                      variant="outlined"
                      autoFocus
                      value={noofemployees}
                      onChange={(event) => {
                        setNoofemployees(event.target.value);
                      }}
                      style={{marginLeft:150,width:'300px'}}
                      inputProps={{
                        style: {
                          height: "10px",
                        },
                      }}
                    />
                    
                  </div>
                  <div
                    className="col-md-12 mt-4"
                    style={{ marginLeft: 160, height: "30px" }}
                  >
                    <TextField
                      id="onboarddate"
                      name="onboarddate"
                      type="date"
                      style={{
                        marginTop: 5,
                        borderRadius: "7px",
                        borderColor: "#F2F2F2",
                        color: "#AAAAAA"
                      }}
                      value={onboarddate}
                      onChange={(event) => {
                        setOnboarddate(event.target.value);
                      }}
                      inputProps={{
                        style: {
                          height: "10px",
                          width: "300px",
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    
                  </div>
                </div>

                <div style={{ display: "flex", displayDirection: "row" }}>
                  <p
                    style={{
                      marginLeft: 150,
                      fontWeight: "bolder",
                      color: "#000000",
                      marginTop: 20,
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
                    // onClick={() => {
                    //   axios
                    //     .post(`http://localhost:9595/companies/${selectedUserId}`)
                    //     .then((response) => {
                    //       console.log("Profile Updated successfully");
                    //       navigate("/companyprofile");
                    //     })
                    //     .catch((error) => {
                    //       console.error("Error Updated profile", error);
                    //     });
                    // }}
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
                </form>
              {/* </Form> */}
            {/* </Formik> */}
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Companydetails;
