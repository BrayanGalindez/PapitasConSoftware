import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/User/UserAccount.css';
import TopBar from '../Home/TopBar';
import Footer from '../Home/Footer';
import UserData from '../User/UserData';

const UserAccount = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <TopBar showSearch={false} />
      <div className="user-account-container">
        {userData && <UserData data={userData} />}
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;