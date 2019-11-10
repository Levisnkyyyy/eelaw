import React, {useEffect} from 'react';
import {useIntl} from 'gatsby-plugin-intl';
const Contact = ()=> {
    const intl = useIntl();
    useEffect(()=> {

    });
    return <div className="container">
        <div className="contact-container">
        <h3 className="title">{intl.formatMessage({id: 'index.behappy'})}</h3>
        <div className="contact-form">
            <form>
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
                    <button className="btn send">{intl.formatMessage({id: 'index.form.send'})}</button>
                </div>
            </form>
        </div>
        </div>
    </div>
}
export default Contact