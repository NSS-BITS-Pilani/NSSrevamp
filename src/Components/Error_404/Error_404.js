import { Button } from 'react-bootstrap';
import styles from './Error_404.scss';

const Error_404 = () => (
    <div className={`container ${styles.errorContainer} errorContainer text-center`}>
        <div className="row">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The page you're looking for does not seem to exist</p>
        </div>
        <div className="row mt-5 text-center">
            <Button className={`${styles.homeButton} homeButton`} href="/" variant="success">Go to Home</Button>
        </div>
    </div>
);

export default Error_404;