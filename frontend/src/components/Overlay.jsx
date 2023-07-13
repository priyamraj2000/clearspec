import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Overlay = ({ history, onClose }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
        onClose();
    };
    console.log("is working");
    return (

        <div className="overlay px-5 py-5">
            <span className="close-icon my-2" onClick={onClose}>
                <i className="fa-solid fa-xmark fa-2x"></i>
            </span>
            <h2 className="my-4 mx-4">Search Clerspecs</h2>
            <Form onSubmit={submitHandler} className="d-flex">
                <Form.Control
                    size="lg"
                    type="text"
                    name="q"
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Search"
                    className="mr-sm-2 ml-sm-5 border-0"
                ></Form.Control>
            </Form>

        </div>
    );
};
export default Overlay;