import '../../index.css';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const seachURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search () {

    // useSearchParams: para pegar parametros da URL
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q");

    async function getSearchedMovies (url) {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {

        const searchQueryURL = `${seachURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchQueryURL)
    }, [query])

    return (
        <div>
            
            <Navbar />

            <div className="container">

                <h2 className="title">
                    Resultados para: <span className="query-text">{query}</span>
                </h2>

                <div className="movies-container">
                    {movies.length == 0 && <p>Carregando ...</p>}
                    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>

            </div>

        </div>
        )
}

export default Search;