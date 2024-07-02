import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>01-01-1990</td>
            <td>johndoe@example.com</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
