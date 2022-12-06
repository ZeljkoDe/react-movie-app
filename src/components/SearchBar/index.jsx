import styles from './style.module.css';

export default function SearchBar({ onSearch, onChange }) {
	return (
		<form onSubmit={onSearch}>
			<input type='text' onChange={onChange} />
			<button type='submit'>Search</button>
		</form>
	);
}
