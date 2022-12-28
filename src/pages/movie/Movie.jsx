import './Movie.css';
import MovieCard from '../components/MovieCard';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { BsGrGraphUp, BsWallet, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';

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

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div>{movie && (<><MovieCard movie={movie} showLink={true}/></>)}</div>
        )
}

export default Movie;