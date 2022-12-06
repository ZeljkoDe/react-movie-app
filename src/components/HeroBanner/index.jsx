import styles from './style.module.css';

export default function HeroBanner({ selectedMovie }) {
	const backgroundURL =
		'https://image.tmdb.org/t/p/w1280/' + selectedMovie.backdrop_path;
	return (
		<section
			className={styles.hero}
			style={{
				backgroundImage: `url(${backgroundURL})`,
			}}
		>
			<div className={styles.left}>
				<h1>{selectedMovie.title}</h1>
				{selectedMovie.overview && <p>{selectedMovie.overview}</p>}
			</div>
			<button>Play Trailer</button>
		</section>
	);
}
