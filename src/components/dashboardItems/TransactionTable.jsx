const Avatar = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
);


import React from "react";
import "./table.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar1 from "../../assets/images/avatar1.jpg";
import Avatar2 from "../../assets/images/avatar2.jpg";
import Avatar3 from "../../assets/images/avatar3.jpg";
import Avatar4 from "../../assets/images/avatar4.jpg";
import Avatar5 from "../../assets/images/avatar5.jpg";
import Avatar6 from "../../assets/images/avatar6.jpg";

function createData(id, customerImage, customerName, product, amount, vendor, status, rating) {
  return { id, customerImage, customerName, product, amount, vendor, status, rating };
}

const rows = [
  createData("#VZ2112", <img src={Avatar1} alt="Avatar Image"/>, "Alex Smith", "clothes", "$100.00", "Zeotic Fashion", "Paid", "5.0"),
  createData("#VZ2112", <img src={Avatar2} alt="Avatar Image"/>, "Alex Smith", "clothes", "$100.00", "Zeotic Fashion", "Paid", "5.0"),
  createData("#VZ2111", <img src={Avatar3} alt="Avatar Image"/>, "Jansh Brown", "Kitchen Storage", "$149.00", "Micro Design", "Pending", "4.5"),
  createData("#VZ2108", <img src={Avatar4} alt="Avatar Image"/>, "Ayaan Bowen", "Bike Accessories", "$215.00", "Nesta Technologies	", "Paid", "4.9"),
  createData("#VZ2108", <img src={Avatar5} alt="Avatar Image"/>, "Prezy Mark", "Furniture", "$199.00", "Syntyce Solutions", "Unpaid", "4.3"),
  createData("#VZ2107", <img src={Avatar6} alt="Avatar Image"/>, "Vihan Hudda", "Bags and Wallets", "$330.00", "Test Factory	", "Paid", "4.7"),
]

const TransactionTable = () => {
  return (
      <div className="dashboard-card widget-item">
        <div className="dashboard-card__header">
          <span className="widget-item__title">Latest Transaction</span>
        </div>
        <div className="dashboard-card__body">
          <TableContainer component={Paper} className="shadow-none">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-th ps-0" align="left">Order ID</TableCell>
                  <TableCell className="table-th" align="left">Customer</TableCell>
                  <TableCell className="table-th" align="center">Product</TableCell>
                  <TableCell className="table-th" align="center">Amount</TableCell>
                  <TableCell className="table-th" align="center">Vendor</TableCell>
                  <TableCell className="table-th" align="center">Status</TableCell>
                  <TableCell className="table-th pe-0" align="right">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                    <TableCell className="px-0" component="th" scope="row"> {row.id} </TableCell>
                    <TableCell className="px-0" align="center">
                        <div className="user-info d-flex align-items-center gap-2">
                            <span className="user-info__avatar">{row.customerImage}</span>
                            <span className="user-info__name">{row.customerName}</span>
                        </div>
                    </TableCell>
                    <TableCell className="px-0" align="center">{row.product}</TableCell>
                    <TableCell className="px-0" align="center">{row.amount}</TableCell>
                    <TableCell className="px-0" align="center">{row.vendor}</TableCell>
                    <TableCell className="px-0" align="center">
                      <span className={`badge rounded-1 bg-opacity-25 text-success text-bg-success ${row.status}`}> {row.status}</span>
                    </TableCell>    
                    <TableCell className="px-0" align="right">{row.rating}</TableCell>
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
  );
};

export default TransactionTable;
