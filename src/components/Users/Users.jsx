import { Backdrop, CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState([]);
  async function getUser() {
    let res = await axios(API);
    console.log(res);
    setUser(res.data);
  }

  // console.log(data);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <div className="list">
        {user.map(item => (
          <Paper className="card" elevation={10} key={item.id}>
            <h4>{item.name}</h4>
            <div>{item.username}</div>
            <div>{item.email}</div>
            <div>{item.phone}</div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Users;
