import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import SignIn from "../components/SignIn"

const Login = () => {
  return (
    <>
      <header className="container py-3">
        <NavBar />
        <div className='container'>
          <main>
            <h1 className='text-center'>Welcome to MERN Stack</h1>
            <p className='lead text-center'>This is a simple MERN stack app</p>
          </main>
        </div>
      </header>

      <div className='container'>
        <SignIn />
      </div>

      <Footer />
    </>
  )
}

export default Login