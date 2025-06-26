import React from 'react';

const Dashboard = ({ role }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome, {role}!</h2>
    </div>
  );
};

export default Dashboard;
