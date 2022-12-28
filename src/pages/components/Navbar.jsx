import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'

function Navbar() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()

    console.log(search);

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch(``)
  }

  return (
    <div className="NavBar" id="div-navbar">

      <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> MobiesLib</Link>
        </h2>
      </nav>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque um filme" onChange={(e) => {setSearch(e.target.value)}} value={search}/>
        <button type='submit'> <BiSearchAlt2 /> </button>
      </form>
      
    </div>
  )
}

export default Navbar
