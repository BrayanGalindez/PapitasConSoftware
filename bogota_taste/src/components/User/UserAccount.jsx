// // import React, { useEffect, useState, useContext } from 'react';
// import React from 'react';
// // import axios from 'axios';
// import '../../styles/User/UserAccount.css';
// import TopBar from '../Home/TopBar';
// import Footer from '../Home/Footer';
// import UserData from '../User/UserData';
// import { AuthContext } from '../../AuthContext';

// const UserAccount = () => {
//   return (
//     <div>
//       <TopBar showSearch={false} />
//       <div className="user-account-container">
//         <UserData/>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserAccount;

//--------------------------------------------------------------------------------------------- 
import React from 'react';
import '../../styles/User/UserAccount.css';
import TopBar from '../Home/TopBar';
import Footer from '../Home/Footer';
import UserData from '../User/UserData';

const UserAccount = () => {
  return (
    <div>
      <TopBar showSearch={false} />
      <div className="user-account-container">
        {/* Aquí puedes utilizar los valores del contexto según tus necesidades */}
        <UserData/>
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;