import styles from './style.module.css';
export default function MovieCard({ movie }) {
	const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
	return (
		<div className={styles.card}>
			{movie.poster_path ? (
				<img src={`${IMAGE_PATH}${movie.poster_path}`} alt='' />
			) : null}
			<h5>{movie.title}</h5>
		</div>
	);
}
