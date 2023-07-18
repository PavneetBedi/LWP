import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";


const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Page() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  }));

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  //const [checked, setChecked] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowObjects, setSelectedRowObjects] = useState([]);

  // const handleRowSelect = (event, row) => {
  //   const selectedIndex = selectedRows.indexOf(row.id);
  //   let newSelectedRows = [];
  //   let newSelectedRowIds = [];
  
  //   if (selectedIndex === -1) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows, row.id);
  //     newSelectedRowIds = newSelectedRowIds.concat(selectedRowIds, row.id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
  //     newSelectedRowIds = newSelectedRowIds.concat(
  //       selectedRowIds.filter((id) => id !== row.id)
  //     );
  //   } else if (selectedIndex === selectedRows.length - 1) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
  //     newSelectedRowIds = newSelectedRowIds.concat(
  //       selectedRowIds.filter((id) => id !== row.id)
  //     );
  //   } else if (selectedIndex > 0) {
  //     newSelectedRows = newSelectedRows.concat(
  //       selectedRows.slice(0, selectedIndex),
  //       selectedRows.slice(selectedIndex + 1)
  //     );
  //     newSelectedRowIds = newSelectedRowIds.concat(
  //       selectedRowIds.filter((id) => id !== row.id)
  //     );
  //   }
  
  //   setSelectedRows(newSelectedRows);
  //   setSelectedRowIds(newSelectedRowIds);
  //   console.log(newSelectedRowIds);
  
  //   axios.post('http://localhost:9595/training',newSelectedRowIds)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };

  //code

  const handleRowSelect = (event, row) => {
    const selectedIndex = selectedRows.indexOf(row.id);
    let newSelectedRows = [];
    let newSelectedRowObjects = [];
  
    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, row.id);
      newSelectedRowObjects = newSelectedRowObjects.concat(selectedRowObjects, row);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
      newSelectedRowObjects = newSelectedRowObjects.concat(
        selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
      );
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
      newSelectedRowObjects = newSelectedRowObjects.concat(
        selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
      );
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
      newSelectedRowObjects = newSelectedRowObjects.concat(
        selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
      );
    }
  
    setSelectedRows(newSelectedRows);
    setSelectedRowObjects(newSelectedRowObjects);
  
    // Update the students field in the selected training object
    const updatedTraining = {
      ...selectedOption,
      students: newSelectedRowObjects.map((selectedRow) => ({
        id: selectedRow.id,
        studentname: selectedRow.studentname,
        emailid: selectedRow.emailid,
        isDeleted: selectedRow.isDeleted,
        trainings: selectedRow.trainings
      }))
    };
  
    // Send the updatedTraining object to the backend
    axios.post(`http://localhost:9595/training/${selectedOption.id}`, updatedTraining)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  

  // const handleRowSelect = (event, row) => {
  //   const selectedIndex = selectedRows.indexOf(row.id);
  //   let newSelectedRows = [];
  //   let newSelectedRowObjects = [];
  
  //   if (selectedIndex === -1) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows, row.id);
  //     newSelectedRowObjects = newSelectedRowObjects.concat(selectedRowObjects, row);
  //   } else if (selectedIndex === 0) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
  //     newSelectedRowObjects = newSelectedRowObjects.concat(
  //       selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
  //     );
  //   } else if (selectedIndex === selectedRows.length - 1) {
  //     newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
  //     newSelectedRowObjects = newSelectedRowObjects.concat(
  //       selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
  //     );
  //   } else if (selectedIndex > 0) {
  //     newSelectedRows = newSelectedRows.concat(
  //       selectedRows.slice(0, selectedIndex),
  //       selectedRows.slice(selectedIndex + 1)
  //     );
  //     newSelectedRowObjects = newSelectedRowObjects.concat(
  //       selectedRowObjects.filter((selectedRow) => selectedRow.id !== row.id)
  //     );
  //   }
  
  //   setSelectedRows(newSelectedRows);
  //   setSelectedRowObjects(newSelectedRowObjects);
  //   console.log(newSelectedRowObjects);
  //   axios.post('http://localhost:9595/training',newSelectedRowIds)
  //    .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };
  

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  //   console.log(checked);
  // };

  // const handleRowSelect = (event, row) => {
  //   const selectedIndex = selectedRows.indexOf(row);
  //   let newSelected = [];
  
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selectedRows, row);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selectedRows.slice(1));
  //   } else if (selectedIndex === selectedRows.length - 1) {
  //     newSelected = newSelected.concat(selectedRows.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selectedRows.slice(0, selectedIndex),
  //       selectedRows.slice(selectedIndex + 1)
  //     );
  //   }
  
  //   setSelectedRows(newSelected);
  //   console.log(row); // Prints the selected row data to the console
  // };

  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:9595/training?q=${inputValue}`
      );
      setOptions(response.data);
    }

    fetchData();
  }, [inputValue]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9595/students");
    setUsers(result.data);
  };
  return (
    <>
      <Grid style={{ marginTop: 45, marginLeft: 20, cursor: "pointer" }}>
        <Item>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              style={{ borderRadius: 10 }}
            >
              <TableHead
                style={{
                  borderRadius: 20,
                }}
              >
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "18px" }}
                  >
                    Send Invite
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "18px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "18px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "18px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      Select Training
                      <Autocomplete
                        options={options}
                        //getOptionLabel={(option) => option.techstack(option.startdate - option.enddate)}
                        getOptionLabel={(option) =>
                          `${option.techstack} ( ${option.startdate} - ${option.enddate})`
                        }
                        value={selectedOption}
                        onChange={(event, value) => setSelectedOption(value)}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) =>
                          setInputValue(newInputValue)
                        }
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Java Script" />
                        )}
                        style={{
                          width: "300px",
                          marginTop: -16,
                          marginLeft: 20,
                          height: "13px",
                          borderRadius: "7px",
                          borderColor: "#F2F2F2",
                          color: "#AAAAAA",
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "15px" }}
                  >
                    Student Id
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "15px" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "15px" }}
                  >
                    Email Id
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bolder", fontSize: "18px" }}
                  >
                    <Checkbox {...label} />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" style={{ color: "bold" }}>
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.studentname}</TableCell>
                    <TableCell align="center">{user.emailid}</TableCell>
                    <TableCell align="center">
                      {/* <FormControlLabel>
                        label="hello"
                        control={<Checkbox checked={checkedc} onChange={handleChange}/>}
                      </FormControlLabel> */}
                      {/* <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      /> */}
                      <Checkbox
                        // checked={selectedRows.includes(user)}
                        checked={selectedRows.includes(user.id)}
                        onChange={(event) => handleRowSelect(event, user)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>
    </>
  );
}
