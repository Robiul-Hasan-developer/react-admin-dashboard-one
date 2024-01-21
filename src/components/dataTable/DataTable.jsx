import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="userCell d-flex align-items-center gap-2">
                <span className="userCell__img">{params.row.image}</span>
                <span className="userCell__name">{params.row.username}</span>
            </div>
        )
    }
    },
    { field: "email", headerName: "Email", type: "email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "status", headerName: "Status", width: 160, renderCell: (params) => {
        return (
            <span className={`badge rounded-1 bg-opacity-25 text-success text-bg-success ${params.row.status}`}> {params.row.status}</span>
        )
    }},
];

const userRows = [
  { 
    id: 1,
    username: "Snow", 
    image: <img src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=740&t=st=1705750004~exp=1705750604~hmac=d6135747653a69e4f69e5730f3e44accabb56716dc9d9bee877b9bf8ae285fb1" alt="Avatar" /> , 
    email: "snow@gmai.com", 
    age: 35, 
    status: "Pending", 
    action: "" 
},
  { 
    id: 2,
    username: "Lannister", 
    image: <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1705752716~exp=1705753316~hmac=5fdbeee83d5279469e53e1b3b935d959d39e8cd4f1aebf2ebb46bda3bc6da0ee" alt="Avatar" /> , 
    email: "lannister@gmai.com", 
    age: 25, 
    status: "Passive", 
    action: "" 
},
  { 
    id: 3,
    username: "Stark", 
    image: <img src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?w=740&t=st=1705752724~exp=1705753324~hmac=56542ba99d6c556068c54fe56882bb961a4ef46a70aae7e612d2533d4d6aac87" alt="Avatar" /> , 
    email: "stark@gmai.com", 
    age: 65, 
    status: "Active", 
    action: "" 
},
  { 
    id: 4,
    username: "Targaryen", 
    image: <img src="https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?w=740&t=st=1705752726~exp=1705753326~hmac=2d998cbaf6f1512952a7621de457148ef599b1a8ad62961fdbc3db71fa508eae" alt="Avatar" /> , 
    email: "targaryen@gmai.com", 
    age: 22, 
    status: "Pending", 
    action: "" 
},
  { 
    id: 5,
    username: "Melisandre", 
    image: <img src="https://img.freepik.com/premium-photo/young-woman-standing-with-her-arms-crossed_1368-123664.jpg?w=740" alt="Avatar" /> , 
    email: "melisandre@gmai.com", 
    age: 58, 
    status: "Passive", 
    action: "" 
},
  { 
    id: 6,
    username: "Clifford", 
    image: <img src="https://img.freepik.com/premium-photo/portrait-young-beautiful-woman-white_251136-46272.jpg" alt="Avatar" /> , 
    email: "clifford@gmai.com", 
    age: 48, 
    status: "Active", 
    action: "" 
},
  { 
    id: 7,
    username: "Frances", 
    image: <img src="https://img.freepik.com/premium-photo/pretty-woman-yellow-tshirt-red-hair-posing_561613-7512.jpg?w=740" alt="Avatar" /> , 
    email: "frances@gmai.com", 
    age: 34, 
    status: "Pending", 
    action: "" 
},
  { 
    id: 8,
    username: "Roxie", 
    image: <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360&t=st=1705752928~exp=1705753528~hmac=b2099e9c0fd9b485753e9fc85b68399b9d547851bcd73a5dcfb62d3dbc079ae4" alt="Avatar" /> , 
    email: "roxie@gmai.com", 
    age: 15, 
    status: "Passive", 
    action: "" 
},
  { 
    id: 9,
    username: "Roxie", 
    image: <img src="https://img.freepik.com/premium-photo/portrait-young-beautiful-woman-white_251136-46272.jpg" alt="Avatar" /> , 
    email: "roxie@gmai.com", 
    age: 15, 
    status: "Passive", 
    action: "" 
},
];  

const DataTable = () => {

    const actionColumn = [
        { field: "action", headerName: "Action", width: 200, renderCell: (params) => {
            return (
                <div className="d-flex align-items-center gap-2">
                    <Link to={`/users/${params.row.id}`} type="button" className="btn btn-outline-info btn-sm"> View </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
            )
        }},
    ]
    
  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
