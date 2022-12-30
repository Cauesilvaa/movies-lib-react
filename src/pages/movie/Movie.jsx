import './Movie.css';
import MovieCard from '../components/MovieCard';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import Navbar from '../components/Navbar';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie () {

    // Desestruturando e pegando o parametro id da url
    const {id} = useParams();

    const [movie, setMovie] = useState(null)

    async function getMovie (url) {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    function formatCurrency (number) {
        return number.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div>
            <Navbar/>

            <div className='movie-page'>
                {movie && (
                <>
                    <MovieCard movie={movie} showLink={true}/>
                    <p className='tagline'>{movie.tagline}</p>
                    
                    <div className="info">
                        <h3> <BsWallet2/> Orçamento: </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>

                    <div className="info">
                        <h3> <BsGraphUp/> Receita: </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>

                    <div className="info">
                        <h3> <BsHourglassSplit/> Duração: </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>

                    <div className="info">
                        <h3> <BsFillFileEarmarkTextFill/> Descrição: </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>)}
            </div>
        </div>
        )
}

export default Movie;