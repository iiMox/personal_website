import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../actions/message";
import "./Contact.css";

import sendIcon from "../../../images/send.webp";

const Contact = () => {
    const dispatch = useDispatch();

    const [mail, setMail] = useState({
        sender: "",
        email: "",
        subject: "",
        content: "",
    });

    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>CONTACT</h2>
                <p>For all your questions. Don't hesitate</p>
                <form>
                    <input
                        type='text'
                        placeholder='Full name'
                        value={mail.sender}
                        onChange={(e) =>
                            setMail({ ...mail, sender: e.target.value })
                        }
                    />
                    <input
                        type='text'
                        placeholder='E-mail'
                        value={mail.email}
                        onChange={(e) =>
                            setMail({ ...mail, email: e.target.value })
                        }
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        value={mail.subject}
                        onChange={(e) =>
                            setMail({ ...mail, subject: e.target.value })
                        }
                    />

                    <textarea
                        placeholder='Message'
                        value={mail.content}
                        onChange={(e) =>
                            setMail({ ...mail, content: e.target.value })
                        }
                    ></textarea>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(addMessage(mail));
                            setMail({
                                sender: "",
                                email: "",
                                subject: "",
                                content: "",
                            });
                        }}
                    >
                        <img src={sendIcon} alt='Send' />
                        Forward
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
