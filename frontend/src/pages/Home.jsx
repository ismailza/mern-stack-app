import { Container, Grid, Paper, Button } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="container py-3">
        <NavBar />
        <Container>
          <h1 className='text-center'>Welcome to MERN Stack Student Management</h1>
          <p className='lead text-center'>Effortlessly manage student information with our comprehensive solution.</p>
        </Container>
      </header>

      <Container>
        <section className="my-4">
          <h2 className="text-center">Overview</h2>
          <p>Our MERN Stack Student Management application is designed to help you manage student information with ease. With a user-friendly interface and real-time updates, you can keep track of student data efficiently. Whether you're a teacher, administrator, or school staff member, our app provides the tools you need to stay organized and focused on what matters most: educating students.</p>
        </section>
        <section className="my-4">
          <h2 className="text-center">Technologies Used</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="p-3">
                <h3>Frontend</h3>
                <ul>
                  <li><strong>React:</strong> Powers the dynamic user interface, enhancing user interaction with real-time feedback.</li>
                  <li><strong>Material-UI:</strong> Provides a suite of beautifully designed UI components that enhance the application's aesthetics and user experience.</li>
                  <li><strong>Axios:</strong> Facilitates HTTP requests to the backend services, ensuring smooth data transfer.</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="p-3">
                <h3>Backend</h3>
                <ul>
                  <li><strong>Node.js:</strong> Offers the runtime environment for executing JavaScript on the server side, enabling efficient backend services.</li>
                  <li><strong>Express:</strong> Simplifies backend development with its minimalist web framework for creating robust APIs.</li>
                  <li><strong>MongoDB:</strong> Provides a flexible NoSQL database to store and manage application data effectively.</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className="p-3">
                <h3>Deployment</h3>
                <ul>
                  <li><strong>Docker:</strong> Offers containerization that encapsulates the application and its environment, ensuring consistency across development, testing, and production.</li>
                  <li><strong>Docker Compose:</strong> Facilitates the definition and running of multi-container Docker applications, simplifying the deployment process and infrastructure management.</li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </section>
        <section className="my-4">
          <h2 className="text-center">Why Choose Our MERN Stack Application?</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="p-3">
                <h3>Intuitive Design</h3>
                <p>Designed with the end-user in mind, our app provides a seamless experience for managing student data.</p>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="p-3">
                <h3>Real-Time Updates</h3>
                <p>Changes to student information are updated in real-time across the platform, ensuring data accuracy.</p>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="p-3">
                <h3>Secure</h3>
                <p>Your data's security is our top priority. We implement best practices to keep student information safe.</p>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="p-3">
                <h3>Easy Deployment</h3>
                <p>Deployed on Docker with Docker Compose, making it easy to set up and scale according to your needs.</p>
              </Paper>
            </Grid>
          </Grid>
          <div className="text-center mt-4">
            <Link to="/students">
              <Button variant="contained" color="primary">Manage Students</Button>
            </Link>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
