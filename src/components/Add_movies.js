import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Movie_card from './Movie_card';

const Add_movie = (props) => {
    const [show, setShow] = useState(false);
    //const [movies, setMovies] = useState(props.data);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const add = (e) => {
        e.preventDefault()
        props.setData((prevState) => [
            ...prevState,
            {
                id: prevState.length + 1,
                title: title,
                description: description,
                image: "https://picsum.photos/200/200"
            },
        ]);


    }


    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Add a Movie
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {props.description}
                    </p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Movie title</Form.Label>
                            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter a movie title" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows="3" />
                        </Form.Group>
                        <Button onClick={(e) => { add(e) }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Add_movie;