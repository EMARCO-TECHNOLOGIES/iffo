"use client"

import React from 'react'
import formStyle from './ContactUs.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Image from 'next/image';

function ContactUs({ setOpenModal }) {




    return (
        <div className="background">
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div >
                                <button onClick={() => setOpenModal(false)} className='text-3xl text-[#EC008D]'>x</button>
                            </div>
                            {/* <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div> */}
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            {/* <div className='md:mt-20 my-10 self-center'>
                                <Image src={'/logo.png'} width={100} height={100} alt='logo' className='w-40' />
                            </div> */}
                            <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                        </div>
                        <Formik
                            initialValues={{ name: '', email: '', phone: '', message: '' }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Required';
                                }
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.phone) {
                                    errors.phone = "Required"
                                }
                                if (!values.message) {
                                    errors.message = 'Required'
                                }
                                // You can add more validation rules for phone and message if needed
                                return errors;
                            }}
                            onSubmit={(values) => {
                                console.log(values);

                                fetch('https://sheetdb.io/api/v1/0uz5cpi0t9am5', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        data: [
                                            {
                                                'NAME': values.name,
                                                'EMAIL': values.email,
                                                'PHONE': values.phone,
                                                'MESSAGE': values.message
                                            }
                                        ]
                                    })
                                })
                                    .then((response) => {
                                        alert('Details submitted successfully')
                                        response.json()
                                    })
                                    .then((data) => console.log(data));


                            }}
                        >
                            <Form className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <label htmlFor="name" className='text-[#800080]'>NAME</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="app-form-control"
                                        // placeholder="Enter your name"
                                        />
                                        <ErrorMessage name="name" component="div" className=" text-red-600 text-xs font-normal" />
                                    </div>

                                    <div className="app-form-group">
                                        <label htmlFor="email" className='text-[#800080]'>EMAIL</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="app-form-control"
                                        // placeholder="Enter your email"
                                        />
                                        <ErrorMessage name="email" component="div" className=" text-red-600 text-xs font-normal" />
                                    </div>

                                    <div className="app-form-group">
                                        <label htmlFor="phone" className='text-[#800080]'>CONTACT NO</label>
                                        <Field
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="app-form-control"
                                        // placeholder="Enter your phone number"
                                        />
                                        <ErrorMessage name="phone" component="div" className=" text-red-600 text-xs font-normal" />
                                    </div>

                                    <div className="app-form-group message">
                                        <label htmlFor="message" className='text-[#800080]'>MESSAGE</label>
                                        <Field
                                            type="text"
                                            id="message"
                                            name="message"
                                            className="app-form-control"
                                        // placeholder="Enter your message"
                                        />
                                        <ErrorMessage name="message" component="div" className=" text-red-600 text-xs font-normal" />
                                    </div>

                                    <div className="app-form-group buttons">
                                        <button type="submit" className="app-form-button">
                                            SEND
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default ContactUs