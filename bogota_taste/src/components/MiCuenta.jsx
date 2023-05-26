import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import '../styles/MiCuenta.css';
import Footer from "./Footer";

const MiCuenta = () => {
    return (
        <div className="profile-container">
            <div className="profile-column">
                <h1>Consultar Cuenta</h1>
                <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" className="profile-avatar" />
                <Typography variant="h6" className="profile-username">
                Username
                </Typography>
                <Typography variant="h4" className="profile-name">
                John Doe
                </Typography>
                <Button variant="contained" color="primary" className="profile-button">
                Edit Profile
                </Button>
            </div>
            <div className="profile-column">
                <ul className="profile-list">
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                </ul>
            </div>
            <div className="profile-column">
                <ul className="profile-list">
                <li>List Item A</li>
                <li>List Item B</li>
                <li>List Item C</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
      );
    };

export default MiCuenta;