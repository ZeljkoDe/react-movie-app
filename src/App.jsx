import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import './App.css';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState('');
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

	const searchMovies = (e) => {
		e.preventDefault();
		console.log(searchKey);
	};

	const renderMovies = () =>
		movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

	return (
		<>
			<header>
				<h1>Movie Trailer App</h1>
				<form onSubmit={searchMovies}>
					<input
						type='text'
						onChange={(e) => setSearchKey(e.target.value)}
					/>
					<button type='submit'>Search</button>
				</form>
			</header>

			<div className='container'>{renderMovies()}</div>
		</>
	);
}
