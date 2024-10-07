import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, deleteSelectedTodos } from "../features/todoSlice";
import { Button, Form, ListGroup, Container, Row, Col, Modal } from "react-bootstrap";
import './TodoList.css'; // Import custom CSS file for additional styling

const TodoList = () => {
    const [todoText, setTodoText] = useState("");
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showDeleteSelectedConfirm, setShowDeleteSelectedConfirm] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            dispatch(addTodo(todoText));
            setTodoText("");
        }
    };

    const handleDelete = (todoId) => {
        setTodoToDelete(todoId);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        dispatch(deleteTodo(todoToDelete));
        setShowDeleteConfirm(false);
        setTodoToDelete(null);
    };

    const handleDeleteSelected = () => {
        setShowDeleteSelectedConfirm(true);
    };

    const confirmDeleteSelected = () => {
        dispatch(deleteSelectedTodos());
        setShowDeleteSelectedConfirm(false);
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">My Todo List</h2>
                    <Form onSubmit={handleAddTodo} className="d-flex mb-4 ml-5">
                        <Form.Control
                            type="text"
                            placeholder="Add todo..."
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="ms-2">
                            Submit
                        </Button>
                    </Form>

                    {todos.length === 0 ? (
                        <p className="text-center no-task-message">
                            No task pending
                        </p>
                    ) : (
                            <>
                                <ListGroup>
                                    {todos.map((todo) => (
                                        <ListGroup.Item
                                            key={todo.id}
                                            className="d-flex justify-content-between align-items-center"
                                            style={{
                                                backgroundColor: todo.completed ? "#d4edda" : "white",
                                            }}
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                checked={todo.completed}
                                                onChange={() => dispatch(toggleComplete(todo.id))}
                                                label={
                                                    <span
                                                        style={{
                                                            textDecoration: todo.completed ? "line-through" : "none",
                                                            color: todo.completed ? "gray" : "black",
                                                        }}
                                                    >
                                                        {todo.text}
                                                    </span>
                                                }
                                            />
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleDelete(todo.id)}
                                            >
                                                Delete
                                            </Button>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>

                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span style={{ fontWeight: 'bold' }}>Total complete items: {todos.filter((todo) => todo.completed).length}</span>
                                    <Button variant="danger" onClick={handleDeleteSelected}>
                                        Delete Selected
                                    </Button>
                                </div>
                            </>
                        )}

                    {/* Delete Confirmation Modal for individual task */}
                    <Modal
                        show={showDeleteConfirm}
                        onHide={() => setShowDeleteConfirm(false)}
                        centered
                        className="delete-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete this task?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={() => setShowDeleteConfirm(false)}>
                                Cancel
                            </Button>
                            <Button
                                variant="danger"
                                onClick={confirmDelete}
                                className="confirm-delete-button"
                            >
                                Confirm Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    {/* Delete Confirmation Modal for selected tasks */}
                    <Modal
                        show={showDeleteSelectedConfirm}
                        onHide={() => setShowDeleteSelectedConfirm(false)}
                        // size="lg" // Adjusted size to be larger
                        // aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="delete-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete all selected tasks?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={() => setShowDeleteSelectedConfirm(false)}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={confirmDeleteSelected} className="confirm-delete-button">
                                Confirm Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;
