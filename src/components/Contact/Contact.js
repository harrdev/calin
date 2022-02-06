import emailjs from 'emailjs-com';
import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { ContactWrapper } from './ContactStyles.js';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_sqhl10c";
const TEMPLATE_ID = "template_uz2u94a";
const USER_ID = "user_hjcKh9hxJ8zOi0J4khd4e";

const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text)
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong',
                    text: error.text
                });
            });
        e.target.reset()
    };
    return (
        <div className="Contact">
            <ContactWrapper>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        name='user_email'
                        placeholder='Email…'
                        required
                        icon='mail'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Name'
                        name='user_name'
                        placeholder='Name…'
                        required
                        icon='user circle'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name='user_message'
                        placeholder='Message…'
                        required
                    />
                    <Button type='submit' color='green'>Submit</Button>
                </Form>
            </ContactWrapper>
        </div>
    );
}
export default Contact;