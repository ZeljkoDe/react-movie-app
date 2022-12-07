import { CiImageOff } from 'react-icons/ci';
import styles from './style.module.css';

export default function MovieCard({ movie, selectMovie }) {
	const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
	console.log(movie);
	return (
		<div className={styles.card} onClick={() => selectMovie(movie)}>
			{movie.poster_path ? (
				<img
					src={`${IMAGE_PATH}${movie.poster_path}`}
					alt={movie.original_title}
				/>
			) : (
				<CiImageOff fontSize={40} className={styles['no-poster']} />
			)}
			<h5>{movie.title}</h5>
		</div>
	);
}
