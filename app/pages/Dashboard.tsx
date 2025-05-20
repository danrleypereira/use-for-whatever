import React from "react";
import { Link } from "react-router";

const Dashboard: React.FC = () => {
  // Mock data for alert message
  const message = "Welcome to the FMP Dashboard";
  
  return (
    <div className="p-0">
      <div className="row">
        <div className="col">
          <h1>FMP Dashboard</h1>
        </div>
        <div className="col">
          <div className="header-button-container">
            <Link
              className="kds-button kds-button--outline kds-float-right"
              to="/deal-admin/new"
            >
              New Deal Setup
            </Link>
          </div>
          <div className="kds-float-right">
            {/* Alert bar with message */}
            {message && (
              <div className="alert alert-info" role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mock data for deal collection table */}
      <div className="table-responsive mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Deal ID</th>
              <th>Deal Name</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>D001</td>
              <td>Sample Deal 1</td>
              <td>Active</td>
              <td>2025-05-01</td>
              <td>
                <Link to="/deals/D001" className="btn btn-sm btn-primary">View</Link>
              </td>
            </tr>
            <tr>
              <td>D002</td>
              <td>Sample Deal 2</td>
              <td>Pending</td>
              <td>2025-05-10</td>
              <td>
                <Link to="/deals/D002" className="btn btn-sm btn-primary">View</Link>
              </td>
            </tr>
            <tr>
              <td>D003</td>
              <td>Sample Deal 3</td>
              <td>Completed</td>
              <td>2025-04-25</td>
              <td>
                <Link to="/deals/D003" className="btn btn-sm btn-primary">View</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;