import React from 'react';
import classes from "./contacts.scss";

const contacts = () => {
    return (
        <div className={`${classes.container} container`}>
            <form action="#">
                <h1>Contact Us</h1>
                <label for="name">
                    <div className={`${classes.inputHead} inputHead`}>
                        Name
                    </div>
                </label>
                <input type="text" id="name" name="name" placeholder="James Bond" />
                <label for="email">
                    <div className={`${classes.inputHead} inputHead`}>
                        E-mail
                    </div>
                </label>
                <input type="text" id="email" name="email" placeholder="abc@xyz.com" />
                <label for="fname">
                    <div className={`${classes.inputHead} inputHead`}>
                        Message
                    </div>
                </label>
                <input type="text" id="message" name="message" placeholder="Hey there, I wanted to say hi  and that "/>
            </form>
        </div>
    );
}

export default contacts;