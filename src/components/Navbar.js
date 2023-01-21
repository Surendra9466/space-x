import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Just for demo purpose!");

export default function Navbar() {
    return (
        <nav className="nav-item p-5 flex justify-between text-xs items-center tracking-wider">
            <Link to="/">
                <div className="logo">
                </div>
            </Link>
            <ul className="uppercase text-white flex gap-4" onClick={notify}>
                <li className="cursor-pointer">Space Rocket</li>
                <li className="cursor-pointer">Rideshare</li>
                <li className="cursor-pointer">Satellite</li>
            </ul>
            <div className='absolute'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </nav>
    )
}