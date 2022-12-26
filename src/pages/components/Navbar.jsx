import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {

  return (
    <div className="NavBar">

      <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> MobiesLib</Link>
        </h2>
      </nav>

      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type='submit'> <BiSearchAlt2 /> </button>
      </form>
      
    </div>
  )
}

export default Navbar
