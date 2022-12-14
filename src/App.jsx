import { useEffect, useState } from 'react';
import { MovieCard, SearchBar, HeroBanner } from './components';
import axios from 'axios';
import './App.css';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState('');
	const [selectedMovie, setSelectedMovie] = useState([]);

	const API_URL = 'https://api.themoviedb.org/3';
	const fetchMovies = async (searchKey) => {
		const type = searchKey ? '/search' : '/discover';
		const {
			data: { results },
		} = await axios.get(API_URL + type + '/movie', {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
				query: searchKey,
			},
		});

		setSelectedMovie(results[0]);
		setMovies(results);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const onInputChange = (e) => setSearchKey(e.target.value);

	const searchMovies = (e) => {
		e.preventDefault();
		fetchMovies(searchKey);
	};

	const renderMovies = () =>
		movies.map((movie) => (
			<MovieCard key={movie.id} movie={movie} selectMovie={setSelectedMovie} />
		));

	return (
		<>
			<header>
				<h1>Movie Trailer App</h1>
				<SearchBar onChange={onInputChange} onSearch={searchMovies} />
			</header>

			<HeroBanner selectedMovie={selectedMovie}/>

			<div className='container'>{renderMovies()}</div>
		</>
	);
}
