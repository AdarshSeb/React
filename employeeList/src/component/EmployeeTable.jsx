import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  // Inline styles for table container with glowing shadow effect
  const tableContainerStyle = {
    backgroundColor: '#f4f4f4', // Light background for contrast
    padding: '20px',
    borderRadius: '10px', // Optional: Rounded corners
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 255, 255, 0.5)', // Glowing shadow effect
    overflow: 'hidden', // Ensures the shadow effect doesn't overflow
  };

  // Inline styles for table
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const headerStyle = {
    backgroundColor: '#333', // Dark background for headers
    color: '#fff', // White text color for headers
    borderBottom: '2px solid #ff5722', // Highlight border color for header
  };

  const rowStyle = {
    backgroundColor: '#ffffff', // White background for rows
    borderBottom: '1px solid #ddd', // Light border color for rows
  };

  const rowHoverStyle = {
    backgroundColor: '#e0f7fa', // Light cyan background for hover effect
  };

  return (
    <div style={tableContainerStyle}>
      <Table style={tableStyle} striped bordered hover>
        <thead style={headerStyle}>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={rowStyle}>
              <td>{employee.id}</td>
              <td>{employee.username}</td>
              <td>{employee.email}</td>
              <td>{employee.status}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => onDelete(employee.id, employee.username)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
