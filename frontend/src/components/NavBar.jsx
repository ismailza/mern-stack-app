import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar() {
  return (
    <nav className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
      <Link to='/' className='d-flex align-items-center text-decoration-none'>
        <span className='fs-4'>MERN Stack</span>
      </Link>

      <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>

        <Link to={'https://github.com/ismailza/mern-stack-app'} target='_blank' rel='noopener noreferrer' className='py-2 link-dark text-decoration-none'>
          Ismail ZAHIR &nbsp; <GitHubIcon />
        </Link>
      </nav>
    </nav>
  );
}

export default NavBar;
