import './Error_404.scss';
import { NavLink } from 'react-router-dom';

const Error_404 = () => (
    <div className="FOF">
    <div class="container">
    <div class="box">

        <div class="title">
            <span class="block"></span>
            <h1>404<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>Page not found<br></br><NavLink to={"/"} exact={true}><span style={{color:"#1d1761"}}>Go back home</span></NavLink></p>
        </div>

        </div>
    </div>
    </div>
);

export default Error_404;