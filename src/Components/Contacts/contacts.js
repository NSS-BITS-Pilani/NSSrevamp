import React from 'react';
import classes from "./contacts.scss";

const contacts = () => {
    return (
        <div className={`${classes.container} container`}>
            <form action="#" method="POST">
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
                <label for="message">
                    <div className={`${classes.inputHead} inputHead`}>
                        Message
                    </div>
                </label>
                <input type="text" id="message" name="message" placeholder="Hey there, I wanted to say hi and that" />
                <input type="submit" value="Send message" />              
            </form>
            <div className={`${classes.mapContainer} mapContainer`}>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=BITS%20Pilani+(NSS%20BITS%20Pilani)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    );
}

export default contacts;