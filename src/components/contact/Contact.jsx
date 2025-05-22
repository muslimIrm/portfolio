import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FiMail } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ylojvlv', 'template_14svu9x', form.current, 'Rwe_599pJyjr1ODa2')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    e.target.reset(); // إعادة تعيين النموذج
                    alert('تم إرسال الرسالة بنجاح ✅');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('فشل في إرسال الرسالة ❌');
                }
            );
    };

    return (
        <section id="contact">
            <div className="top-title">
                <h4>Get in Touch</h4>
                <h2>My Services</h2>
            </div>

            <div className="container container_conatct">
                <div className="content">
                    <div className="contact-option">
                        <FaTelegramPlane className="contact-icon" />
                        <h4>Telegram</h4>
                        <p>0786375645</p>
                        <a
                            href="https://t.me/0786375645"
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go to Telegram
                        </a>
                    </div>

                    <div className="contact-option">
                        <FiMail className="contact-icon" />
                        <h4>Email</h4>
                        <p>max2dgame12@gmail.com</p>
                        <a
                            href="mailto:max2dgame12@gmail.com"
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send Email
                        </a>
                    </div>

                    <div className="contact-option">
                        <FaInstagram className="contact-icon" />
                        <h4>Instagram</h4>
                        <p>@ms0h_0</p>
                        <a
                            href="https://instagram.com/ms0h_0"
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Instagram
                        </a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Your Full Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
