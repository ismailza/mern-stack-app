import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <section className="mb-2">
        <Link to={'https://github.com/ismailza'} target='_blank' rel='noopener noreferrer' className='btn btn-link btn-floating btn-lg text-dark m-1'>
          <GitHubIcon />
        </Link>
        <Link to={'https://linkedin.com/in/ismailzahir01'} target='_blank' rel='noopener noreferrer' className='btn btn-link btn-floating btn-lg text-dark m-1'>
          <LinkedInIcon />
        </Link>
      </section>

      <p>
        <small>
          &copy; 2024 MERN Stack by&nbsp;
          <Link to={'http://ismailzahir.me'} target='_blank' rel='noopener noreferrer' className='link-primary text-decoration-none'>Ismail ZAHIR</Link>.
          All rights reserved.
        </small>
      </p>
    </footer>
  );
}

export default Footer;
