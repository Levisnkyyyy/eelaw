import React, {useState} from 'react';
import {useIntl} from 'gatsby-plugin-intl';
import emailjs from 'emailjs-com';
import Loader from '../utilities/loader';
const Contact = ()=> {
    const intl = useIntl();
    const [emailState, setEmailState] = useState(0); // 0 - didn't send. 1 - sent. 2 - sent and received okay. 3 - error
    const sendEmail = (e) => {
        e.preventDefault();
        if(emailState === 0) {
            setEmailState(1);
            emailjs.sendForm('smtp_server', 'basic', e.target, 'user_rELuxMKcNRW51CwaQ5DUr')
            .then((result) => {
                setEmailState(2);
            }, (error) => {
                setEmailState(3);
            });
        }
    }
    return <div className="container">
        <div className="contact-container">
        <h3 className="title">{intl.formatMessage({id: 'index.behappy'})}</h3>
        <div className="contact-form">
            <form onSubmit={(e)=> sendEmail(e)}>
                <div className="fullname">
                    <label>{intl.formatMessage({id: 'index.form.fullname'})}</label>
                    <input type="text" name="fullname" />
                </div>
                <div className="phone">
                    <label>{intl.formatMessage({id: 'index.form.phone'})}</label>
                    <input type="text" name="phone" />
                </div>
                <div className="email">
                    <label>{intl.formatMessage({id: 'index.form.email'})}</label>
                    <input type="text" name="email" />
                </div>
                <div className="content">
                    <label>{intl.formatMessage({id: 'index.form.text'})}</label>
                    <textarea name="content"></textarea>
                </div>
                <div className="submit">
                    <button className="btn send">
                        {
                            (emailState === 0 &&
                                intl.formatMessage({id: 'index.form.send'})
                            ) ||
                            (emailState === 1 &&
                                <Loader />
                            ) || (emailState === 2 &&
                                <label>Thank you!</label>
                            ) || (emailState === 3 &&
                                <label>Error</label>
                            )
                        }
                    </button>
                </div>
            </form>
        </div>
        </div>
    </div>
}
export default Contact