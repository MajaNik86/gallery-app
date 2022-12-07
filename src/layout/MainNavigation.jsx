import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from '../hooks/useAuth';



const MainNavigation = (props) => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        await authService.logout();
        window.location='/login';
    };
 

    return <header >
        <nav>
            <ul>
                {!user.email && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {!user.email && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                   {user.email && (
                    <li>
                        <Link to="/galleries">Galleries</Link>
                    </li>
                )}
            
                {user.email && <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>}
              
            </ul>

        </nav>
    </header >
}

export default MainNavigation;