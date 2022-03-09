import React from "react";
import { useState } from "react";
import "./Contact.css";
import sendIcon from "../../../images/send.webp";

const Contact = () => {
    const [mail, setMail] = useState({
        subject: "",
        email: "",
        message: "",
    });

    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>CONTACT</h2>
                <p>For all your questions. Don't hesitate</p>
                <form>
                    <input
                        type='text'
                        placeholder='Subject'
                        value={mail.subject}
                        onChange={(e) =>
                            setMail({ ...mail, subject: e.target.value })
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
                    <textarea
                        placeholder='Message'
                        value={mail.message}
                        onChange={(e) =>
                            setMail({ ...mail, message: e.target.value })
                        }
                    ></textarea>
                    <button>
                        <img src={sendIcon} alt='Send' />
                        Forward
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
