import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: null,
    username: '',
    email: '',
    status: 'active',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('');

  // Fetch Employees from JSON server
  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Add or Update Employee
  const addOrUpdateEmployee = async (employee) => {
    // Check for existing email before adding/updating
    const isEmailDuplicate = employees.some(
      (existingEmployee) =>
        existingEmployee.email === employee.email &&
        existingEmployee.id !== employee.id
    );

    if (isEmailDuplicate) {
      setAlertMessage('Email already exists! Please use a different email.');
      setAlertType('danger');
      return; // Stop further execution
    }

    try {
      if (isEditing) {
        // Update existing employee
        await fetch(`http://localhost:3000/employees/${employee.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employee),
        });
        setAlertMessage(`Employee ${employee.username} updated successfully!`);
        setAlertType('info');
      } else {
        // Add new employee
        await fetch('http://localhost:3000/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: employee.username,
            email: employee.email,
            status: employee.status,
          }),
        });
        setAlertMessage(`Employee ${employee.username} added successfully!`);
        setAlertType('success');
      }
      fetchEmployees();
      resetForm();
    } catch (error) {
      console.error('Error adding/updating employee:', error);
    }
  };

  // Delete Employee
  const deleteEmployee = async (id, username) => {
    try {
      await fetch(`http://localhost:3000/employees/${id}`, {
        method: 'DELETE',
      });
      setAlertMessage(`Employee ${username} deleted successfully!`);
      setAlertType('danger');
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  // Handle Edit Click
  const handleEdit = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
    setIsFormVisible(true); // Show form
  };

  // Reset Form
  const resetForm = () => {
    setNewEmployee({
      id: null,
      username: '',
      email: '',
      status: 'active',
    });
    setIsEditing(false);
    setIsFormVisible(false); // Hide form after submitting
  };

  // Handle Form Submission
  const handleSubmit = (employee) => {
    addOrUpdateEmployee(employee);
  };

  // Confirm Delete
  const confirmDelete = (id, username) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      deleteEmployee(id, username);
    }
  };

  // Show Alert Message
  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000); // Hide after 2 seconds
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Show alert message when alertMessage changes
  useEffect(() => {
    if (alertMessage) {
      showAlert(alertMessage);
    }
  }, [alertMessage]);

  // Determine alert styles based on alert type
  const getAlertStyles = () => {
    switch (alertType) {
      case 'success':
        return { backgroundColor: '#d4edda', color: '#155724', borderColor: '#c3e6cb' };
      case 'danger':
        return { backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb' };
      case 'info':
        return { backgroundColor: '#d1ecf1', color: '#0c5460', borderColor: '#bee5eb' };
      default:
        return {};
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        position: 'relative',
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1 className='text-center'>Employee Management</h1>

      {/* Alert Message */}
      {alertVisible && (
        <div
          className="alert"
          style={{
            ...getAlertStyles(),
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000, // Ensure alert is on top of other content
            width: '30%',
            maxWidth: '300px',
            textAlign: 'center',
            border: '1px solid',
            borderRadius: '0.25rem',
            padding: '10px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
          }}
        >
          {alertMessage}
        </div>
      )}

      {/* Add Employee Button */}
      <button
        className="btn btn-success mb-3 mt-5"
        onClick={() => setIsFormVisible(true)}
      >
        Add Employee
      </button>

      {/* Add/Edit Employee Form */}
      {isFormVisible && (
        <EmployeeForm
          onSubmit={handleSubmit}
          employee={isEditing ? newEmployee : null}
          onCancel={resetForm}
        />
      )}

      {/* Employee List */}
      <h2 className="mt-5">Employee List</h2>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={confirmDelete}
      />
    </div>
  );
};

export default EmployeeList;
