import React from 'react';
import classes from "./contacts_mob.scss";
import Footer from "../Footer/footer_alt";

const contacts = () => {
    return (
        <React.Fragment>
        <div className={`${classes.container_con} container_con`}>
            <div>
                <form action="#" method="POST">
                        <h1>Contact Us</h1>
                        <div>
                <label for="name">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        Name&nbsp;:&nbsp;
                    </div>
                </label>
                <input type="text" id="name" name="name" placeholder="James Bond" />

                        </div>
                        <div>
                            <label for="email">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        E-mail&nbsp;:&nbsp;
                    </div>
                </label>
                <input type="text" id="email" name="email" placeholder="abc@xyz.com" />
                        </div>
                        <div>
                            <label for="message">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        Message&nbsp;:&nbsp;
                    </div>
                            </label>
                            
                <input type="text" id="message" name="message" placeholder="Hey there..." />
                        </div>
                        <div className="button_form_mob">
                            <input type="submit" value="Send message" />
                        </div>
                    </form>
                    </div>
            <div className={`${classes.mapContainer_mob} mapContainer_mob`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.00110235882!2d75.58583171491678!3d28.358816282526607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani!5e0!3m2!1sen!2sin!4v1622363431831!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowfullscreen
                        loading="lazy"
                    />
            </div>
        </div>

        <Footer></Footer>
        </React.Fragment>
    );
}

export default contacts;