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
      const response = await fetch('https://employeeserver-w3fn.onrender.com/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Add or Update Employee
  const addOrUpdateEmployee = async (employee) => {
    // Check for duplicate emails only when adding a new employee (i.e., when `isEditing` is false)
    if (!isEditing) {
      const isEmailDuplicate = employees.some(
        (existingEmployee) => existingEmployee.email === employee.email
      );

      if (isEmailDuplicate) {
        setAlertMessage('Email already exists! Please use a different email.');
        setAlertType('danger');
        return;
      }
    }

    try {
      if (isEditing) {
        // Update the existing employee
        await fetch(`https://employeeserver-w3fn.onrender.com/employees/${employee.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employee),
        });
        setAlertMessage(`Employee ${employee.username} updated successfully!`);
        setAlertType('info');
      } else {
        // Add a new employee
        await fetch('https://employeeserver-w3fn.onrender.com/employees', {
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
      await fetch(`https://employeeserver-w3fn.onrender.com/employees/${id}`, {
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
    setNewEmployee({ ...employee }); // Update state with the selected employee
    setIsEditing(true);
    setIsFormVisible(true); // Show form for editing
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
    setIsFormVisible(false); // Hide form after submission
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

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Show alert message when alertMessage changes
  useEffect(() => {
    if (alertMessage) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000); // Hide alert after 2 seconds
    }
  }, [alertMessage]);

  return (
    <div
      className="container mt-5"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1 className="text-center">Employee Management</h1>

      {/* Alert Message */}
      {alertVisible && (
        <div
          className="alert"
          style={{
            backgroundColor: alertType === 'danger' ? '#f8d7da' : '#d4edda',
            color: alertType === 'danger' ? '#721c24' : '#155724',
            border: '1px solid',
            borderRadius: '0.25rem',
            padding: '10px',
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: '30%',
            maxWidth: '300px',
            textAlign: 'center',
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
