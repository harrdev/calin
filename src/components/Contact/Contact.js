import emailjs from 'emailjs-com';
import React from 'react';
import { useRef } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { ContactWrapper } from './ContactStyles.js';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_sqhl10c";
const TEMPLATE_ID = "template_uz2u94a";
const USER_ID = "user_hjcKh9hxJ8zOi0J4khd4e";

const Contact = () => {
    const form = useRef();

    const handleOnSubmit = (e) => {
        console.log("Form data: ", form.current)
        e.preventDefault();
        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("SUCCESS!");
                },
                (error) => {
                    console.log(error.text);
                    alert("FAILED...", error);
                }
            );
        e.target.reset()
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                    <h1 className="text-center">Email - JavaScript Contact Form</h1>
                    {/* <!-- contact form --> */}
                    <form ref={form} onSubmit={handleOnSubmit}>
                        {/* <!-- name --> */}
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input
                                type="name"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="enter your name"
                            />
                        </div>

                        {/* <!-- email --> */}
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="enter your email"
                            />
                        </div>

                        {/* <!-- subject --> */}
                        <div className="form-group">
                            <label for="subject">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                id="subject"
                                placeholder="enter email subject"
                            />
                        </div>

                        <div className="form-group">
                            <label for="email_body">Message</label>
                            <textarea
                                className="form-control"
                                id="email_body"
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;