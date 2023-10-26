import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const CommentForm = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleCommentSubmit = (values) => {
        toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    };

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    return (
        <div>
            <Button outline onClick={toggleModal}>
                <i className="fa fa-pencil fa-lg"></i> Submit Comment
            </Button>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleCommentSubmit(values)}>

                        <Col md={12}>
                            <Label className="mb-2" htmlFor="rating">Rating</Label>

                            <Control.text
                                model=".rating"
                                id="rating"
                                name="rating"
                                placeholder="Rating"
                                className="form-control mb-2"
                                validators={{
                                    required, isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".rating"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                        <Col md={12}>
                            <Label className="mb-2" htmlFor="author">Your Name</Label>
                            <Control.text
                                model=".yourname"
                                id="yourname"
                                name="yourname"
                                placeholder="Your name"
                                className="form-control mb-2"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".yourname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        <Col md={12}>
                            <Label className="mb-2" htmlFor="comment">Comment</Label>

                            <Control.textarea
                                model=".comment"
                                id="comment"
                                name="comment"
                                rows={6}
                                placeholder="Comment"
                                className="form-control mb-2"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(500)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 500 characters or less'
                                }}
                            />
                        </Col>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CommentForm;
