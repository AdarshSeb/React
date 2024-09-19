import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmployeeForm = ({ onSubmit, employee, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    status: 'active',
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee); // Populate the form with the employee data when editing
    } else {
      setFormData({
        id: '',
        username: '',
        email: '',
        status: 'active',
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      alert('Please fill out both username and email.');
      return;
    }
    onSubmit(formData); // Call the parent component's submit handler
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mt-4">
        <Button variant="primary" type="submit">
          {employee ? 'Update Employee' : 'Add Employee'}
        </Button>
        <Button variant="secondary ms-5" onClick={onCancel} className="ml-2">
          Cancel
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EmployeeForm;
