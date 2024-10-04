import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";
import { Button, Container, Row, Col, Modal, Toast } from "react-bootstrap";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Fetch students from the JSON server
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // Add or Update Student
  const handleSave = (student) => {
    if (student.id) {
      // Update existing student
      fetch(`http://localhost:5000/students/${student.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        setStudents((prev) =>
          prev.map((s) => (s.id === student.id ? student : s))
        );
        setToastMessage("Student updated successfully!");
        setShowToast(true);
      });
    } else {
      // Create a new student
      fetch("http://localhost:5000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then((res) => res.json())
        .then((newStudent) => {
          setStudents((prev) => [...prev, newStudent]);
          setToastMessage("Student added successfully!");
          setShowToast(true);
        });
    }
    setShow(false); // Close the modal after save
  };

  // Show delete confirmation modal
  const handleDeleteConfirmation = (student) => {
    setCurrentStudent(student); // Set the current student to be deleted
    setConfirmDelete(true); // Open the confirmation modal
  };

  // Delete Student


const handleDelete = (student) => {

    if (currentStudent) {
       
      fetch(`http://localhost:5000/students/${student}`, { method: "DELETE" })
        .then(() => {
          setStudents((prev) => prev.filter((s) => s.id !== student));
          // Show the toast message after confirming the deletion
          setToastMessage(`Student '${currentStudent.name}' deleted successfully!`);
          setShowToast(true);
          setConfirmDelete(false); // Close confirmation modal
          setCurrentStudent(null); // Clear current student
        })
        .catch(err => {
          console.error("Delete error:", err);
          setToastMessage("Error deleting student."); // Set error message
          setShowToast(true); // Show error message
        });
    }
  };
  

  // Open Edit Modal for Student
  const handleEdit = (student) => {
    setCurrentStudent(student);
    setShow(true);
  };

  // Handle Add New Student
  const handleAddNew = () => {
    setCurrentStudent(null); // Clear the currentStudent for adding new
    setShow(true); // Show the modal
  };

  const handleClose = () => {
    setShow(false); // Close the modal
    setCurrentStudent(null); // Clear currentStudent state
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false); // Close delete confirmation modal
    setCurrentStudent(null); // Clear currentStudent state
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Student Management</h1>

      {/* Button to Add a New Student */}
      <Button variant="primary" onClick={handleAddNew} className="mb-4 add-student-btn">
        Add Student
      </Button>

      {/* Display students using card layout */}
      <Row className="g-4">
        {students.map((student) => (
          <Col key={student.id} sm={6} md={4} lg={3}>
            <StudentCard
              student={student}
              handleEdit={handleEdit}
              handleDelete={handleDeleteConfirmation}
            />
          </Col>
        ))}
      </Row>

      {/* Modal for Add/Edit Student */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentStudent ? "Edit Student" : "Add Student"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentForm
            currentStudent={currentStudent}
            handleSave={handleSave}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal for Deleting a Student */}
      <Modal show={confirmDelete} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete '{currentStudent ? currentStudent.name : ""}'?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(currentStudent.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast for Messages */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{ 
            position: 'fixed', 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1050,
         }}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default StudentList;
