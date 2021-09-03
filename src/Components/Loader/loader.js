import React from "react";
import classes from "./loader.scss";

const Loader = () => (
    <React.Fragment>
        <div className={`${classes.loaderWrapper} loaderWrapper`}>
            {/* ADD LOADER PAGE CONTENTS INSIDE THIS PARENT BLOCK ELEMENT */}
            <div className="logo">
                <img src="./assets/nss.svg" alt="NSS Logo" />
            </div>
            <h2 className="loaderText">nss bits pilani</h2>
        </div>
    </React.Fragment>
)

export default Loader;