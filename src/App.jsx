import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import './App.css';

export default function App() {
	const [movies, setMovies] = useState([]);
	const API_URL = 'https://api.themoviedb.org/3';
	const fetchMovies = async () => {
		const {
			data: { results },
		} = await axios.get(API_URL + '/discover/movie', {
			params: { api_key: process.env.REACT_APP_MOVIE_API_KEY },
		});

		setMovies(results);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const renderMovies = () =>
		movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

	return <div className='container'>{renderMovies()}</div>;
}
