import '../styles/ErrorPage.scss';
import Navbar from './Navbar';

function Error(){
    return(
        <div className="error-page h-screen relative">
            <Navbar />
            <div className='tagline text-white text-6xl absolute'>404!!! Page Not Found</div>
        </div>
    )
}

export default Error;