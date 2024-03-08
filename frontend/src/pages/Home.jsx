import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Home = () => {
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
        <section>
          <h2>What is MERN Stack?</h2>
          <p>
            MERN stack is a JavaScript stack that's designed to make the development process smoother. MERN includes four open-source components: MongoDB, Express, React, and Node.js. These components provide an end-to-end framework for developers to work in.
          </p>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Home