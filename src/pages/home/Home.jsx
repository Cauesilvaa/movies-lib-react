import Navbar from '../components/Navbar';

import MovieCard from '../components/MovieCard';

import { useEffect, useState } from 'react';

import '../../index.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home () {

    const [topMovies, setTopMovies] = useState([])

    async function getTopRatedMovies (url) {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    //Essa funnção acontece quando carrega/recarrega a pagina
    useEffect(() => {

        // retorna os filmes mais bem avaliados
        const topRatedMovidesUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedMovidesUrl)
    }, [])

    return (
        <div>
            
            <Navbar />

            <div className="container">
                <h2 className="title">Melhores filmes:</h2>
                <div className="movies-container">
                    {topMovies.length == 0 && <p>Carregando ...</p>}
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home;