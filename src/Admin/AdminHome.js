import React, { useEffect, useState } from 'react';
const AdminHome = () => {
    const [adminData, setAdminData] = useState("");

    useEffect(() => {
        const storedAdminData = localStorage.getItem('admin');
        if (storedAdminData) {
          const parsedAdminData = JSON.parse(storedAdminData);
          setAdminData(parsedAdminData);
        //   fetchCounts();
        }
      }, []);
    return (
        <div>
            {
            adminData && (
             <h4>Welcome {adminData.username}</h4>
            )}
        </div>
    );
}

export default AdminHome;
