import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import Footer from './Footer';
import UserData from './UserData';

const UserAccount = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/id');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <TopBar />
      {userData && <UserData data={userData} />}
      <Footer />
    </div>
  );
};

export default UserAccount;