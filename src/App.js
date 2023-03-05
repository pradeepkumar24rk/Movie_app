import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import MovieListSearch from './components/MovieListSearch';


const App = () => {

	const[movies,setmovies]=useState([]);
	const[searchValue,setSearchValue]=useState('');

	const getMovieRequest= async(searchValue)=>{
		
		const url=`https://www.omdbapi.com/?s=${searchValue}&apikey=79555010`;
		const responce=await fetch(url);
		const responceJson=await responce.json();

		if(responceJson.Search){
			setmovies(responceJson.Search);
		}
	};

	useEffect(()=>{
		getMovieRequest(searchValue);
	},[searchValue]);

	return (
		<div className='Container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>

				<MovieListHeading 
					heading="Movies"
				/>

				<MovieListSearch 
					searchValue={searchValue} 
					setSearchValue={setSearchValue}
				/>

			</div>
			<div className='row'>
				<MovieList
				movies={movies}
				/>
			</div>

		</div>
	);
};

export default App;
