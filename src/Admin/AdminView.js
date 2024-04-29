import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import config from '../config'


const AdminView = () => {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get(`${config.url}/viewdonors`);
      setDonors(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const deleteDonor = async (email) => {
    try {
      await axios.delete(`${config.url}/deletedonors/${email}`);
      fetchDonors();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{backgroundImage: 'pic'}}>
    <div className='adminview-container' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='adminview' style={{ textAlign: 'center' }}>
        <br/>
        <br/>
        <Typography variant="h4" gutterBottom>
          List of Registered Donors
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="donors table">
            <TableHead>
              <TableRow>
                <TableCell className="header-cell">First Name</TableCell>
                <TableCell className="header-cell">Last Name</TableCell>
                <TableCell className="header-cell">Email</TableCell>
                <TableCell className="header-cell">Contact</TableCell>
                <TableCell className="header-cell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(donors) && donors.length > 0 ? (
                donors.map((donor, index) => (
                  <TableRow key={index}>
                    <TableCell>{donor.firstName}</TableCell>
                    <TableCell>{donor.lastName}</TableCell>
                    <TableCell>{donor.email}</TableCell>
                    <TableCell>{donor.contact}</TableCell>
                    <TableCell>
                      <Button
                        className="delete-button"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteDonor(donor.email)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="5">Data Not Found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
      <style>
        {`
          /* Decrease padding on each side of table rows */
          .MuiTableRow-root {
            padding: 5px; /* Adjust as needed */
          }

          /* Make table headers bold */
          .header-cell {
            font-weight: bold;
          }
          
          /* Change delete button color */
          .delete-button {
            background-color: #a22f4f;
          }
        `}
      </style>
    </div>
  );
};

export default AdminView;
