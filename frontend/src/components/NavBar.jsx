import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Ensure the path matches your project structure
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {

  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
      <Link to='/' className='d-flex align-items-center text-decoration-none'>
        <span className='fs-4'>MERN Stack</span>
      </Link>

      <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>

        {user ? (
          <div className="dropdown">
            <span className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <AccountCircleIcon /> &nbsp; {user.firstname} {user.lastname}
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to={'https://github.com/ismailza/mern-stack-app'} target='_blank' rel='noopener noreferrer' className='py-2 link-dark text-decoration-none'>
            Ismail ZAHIR &nbsp; <GitHubIcon />
          </Link>
        )}

      </nav>
    </nav >
  );
}

export default NavBar;
