import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import config from '../config'
const DonorTrans = () => {
    const [transactions, setTransactions] = useState([]);
    const [donorData, setDonorData] = useState("");

    useEffect(() => {
        const storedDonorData = localStorage.getItem('donor');
        if (storedDonorData) {
            const parsedDonorData = JSON.parse(storedDonorData);
            setDonorData(parsedDonorData);
        }
    }, []);

    useEffect(() => {
        console.log("Donor Email:", donorData.email);
        const fetchTransactions = async () => {
            try {
                if (donorData.email) {
                    const response = await axios.get(`${config.url}/viewtrans?email=${donorData.email}`);
                    console.log("Transactions:", response.data);
                    if (Array.isArray(response.data)) {
                        setTransactions(response.data);
                    } else {
                        console.error('Response data is not an array:', response.data);
                    }
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, [donorData.email]);

    if (!donorData.email) {
        return <div>Please log in to view transactions.</div>;
    }

    return (
        <div>
            <h1>Transactions</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Donated Amount</TableCell>
                            <TableCell>Date Time</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6}>No transactions found</TableCell>
                            </TableRow>
                        ) : (
                            transactions.map(transaction => (
                                transaction.email === donorData.email && (
                                    <TableRow key={transaction._id}>
                                        <TableCell>{transaction.firstName}</TableCell>
                                        <TableCell>{transaction.lastName}</TableCell>
                                        <TableCell>{transaction.email}</TableCell>
                                        <TableCell>{transaction.donatedAmount}</TableCell>
                                        <TableCell>{transaction.dateTime}</TableCell>
                                        <TableCell>Success</TableCell>
                                    </TableRow>
                                )
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DonorTrans;
