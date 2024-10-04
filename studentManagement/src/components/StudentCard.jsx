import React from "react";
import { Card, Button } from "react-bootstrap";
import "./StudentCard.css"; // Import custom styles

const StudentCard = ({ student, handleEdit, handleDelete }) => {
  return (
    <Card className="student-card mb-4">
      <div className="student-card-header text-center">
        {/* Using Bootstrap Icons for the student icon */}
        <i className="bi bi-person-circle student-card-icon" style={{ fontSize: "50px" }}></i>
      </div>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{student.email}</Card.Subtitle>
        <Card.Text>
          <strong>Course: </strong>
          {student.course}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            variant="warning"
            className="edit-btn"
            size="sm"
            onClick={() => handleEdit(student)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            className="delete-btn"
            size="sm"
            onClick={() => handleDelete(student)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
