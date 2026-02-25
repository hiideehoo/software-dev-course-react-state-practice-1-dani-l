import './App.css';
import {useState} from 'react';
import movies from './mock-data/movies';



const genreList = document.getElementById("genreList");
genreList.addEventListener("click", function(value) {
    movies.filter((movie) => (movie.genre === value));
	return <p>{movies}</p>
})

function App() {

	const [selectedGenre, setSelectedGenre] = useState("");

const filteredMovies = movies.filter(
	(movie) => movie.genre === selectedGenre
);

	return <>
	<br>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
			<option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
        </select>

		{filteredMovies.map((movie) => (
			<p key={movie.title}>{movie.title}</p>
		))}
    </br>
	</>;
}

export default App;
