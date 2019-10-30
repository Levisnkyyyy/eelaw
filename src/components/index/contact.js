import React, {useEffect} from 'react';
const Contact = ()=> {
    useEffect(()=> {

    });
    return <div className="container">
        <div className="contact-container">
        <h3 className="title">I will be happy to hear from <span>you</span>.</h3>
        <div className="contact-form">
            <form>
                <div className="fullname">
                    <label>Full Name</label>
                    <input type="text" name="fullname" />
                </div>
                <div className="phone">
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="text" name="email" />
                </div>
                <div className="content">
                    <label>Text</label>
                    <textarea name="content"></textarea>
                </div>
                <div className="submit">
                    <button className="btn send">Send</button>
                </div>
            </form>
        </div>
        </div>
    </div>
}
export default Contact