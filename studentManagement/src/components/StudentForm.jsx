import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const StudentForm = ({ currentStudent, handleSave, handleClose }) => {
  // Set initial state for form fields
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    course: "",
  });

  // Update state when `currentStudent` changes
  useEffect(() => {
    if (currentStudent) {
      setStudentData(currentStudent);
    } else {
      setStudentData({ name: "", email: "", course: "" });
    }
  }, [currentStudent]);

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(studentData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter student name"
          value={studentData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter student email"
          value={studentData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCourse" className="mb-3">
        <Form.Label>Course</Form.Label>
        <Form.Control
          type="text"
          name="course"
          placeholder="Enter course"
          value={studentData.course}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {currentStudent ? "Update" : "Add"} Student
        </Button>
      </div>
    </Form>
  );
};

export default StudentForm;
