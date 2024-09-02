import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });

    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.address) tempErrors.address = "Address is required.";
        if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile)) tempErrors.mobile = "Valid mobile number is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid email is required.";
        if (!formData.gender) tempErrors.gender = "Gender is required.";
        if (!formData.dob) tempErrors.dob = "Date of birth is required.";
        if (!formData.course) tempErrors.course = "Course selection is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const alertData = `
        Name: ${formData.name}
        Address: ${formData.address}
        Mobile: ${formData.mobile}
        Email: ${formData.email}
        Gender: ${formData.gender}
        Date of Birth: ${formData.dob}
        Course: ${formData.course}
      `;
            alert(`Data Stored Successfully!\n${alertData}`);
            setShowAlert(true);
            console.log("Submitted Data:", formData);
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''
        });
        setErrors({});
        setShowAlert(false);
    };

    return (

        <Container className="my-5 d-flex justify-content-center">
            <Card className="p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
                <Card.Body>
                    <h2 className="mb-4 text-center text-primary">Higher Secondary Admission Form</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                        className="rounded"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formAddress" className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Enter your address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address}
                                        className="rounded"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formMobile" className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter your mobile number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        isInvalid={!!errors.mobile}
                                        className="rounded"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.mobile}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                        className="rounded"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formGender" className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div className="d-flex">
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Male"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === 'Male'}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                            className="me-3"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Female"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === 'Female'}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                        />
                                    </div>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.gender}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formDob" className="mb-3">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        isInvalid={!!errors.dob}
                                        className="rounded"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.dob}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formCourse" className="mb-4">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        isInvalid={!!errors.course}
                                        className="rounded"
                                    >
                                        <option value="">Select a course</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Humanities">Humanities</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.course}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="d-flex justify-content-between">
                                <Button variant="primary" type="submit" className="rounded px-4">
                                    Register
                </Button>
                                <Button variant="secondary" onClick={handleReset} className="rounded px-4">
                                    Cancel
                </Button>
                            </Col>
                        </Row>
                    </Form>

                    {showAlert && (
                        <Alert variant="success" className="mt-4 rounded">
                            Data stored successfully!
                        </Alert>
                    )}
                </Card.Body>
            </Card>
        </Container>

    );
}

export default RegistrationForm;
