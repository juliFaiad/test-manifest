import { useState, useEffect, useCallback } from 'react';

export const AsyncTesting = () => {
	const [pokemon, setPokemon] = useState([]);

	const fetchPokemon = useCallback(async () => {
		const randomId = Math.floor(Math.random() * 151) + 1;
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomId}`
		);
		const data = await response.json();
		setPokemon((prevPokemon) => [...prevPokemon, data]);
	}, []);

	useEffect(() => {
		fetchPokemon();
	}, [fetchPokemon]);

	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

	if (pokemon.length === 0) return <div>Loading...</div>;

	return (
		<div>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{pokemon.map((poke) => (
					<div
						key={poke.id + Math.random()}
						style={{
							backgroundColor: '#f2f2f2',
							borderRadius: '0.5rem',
							width: '10rem',
							height: '10rem',
							margin: '1rem',
							padding: '1rem',
							color: '#242526',
						}}>
						<h2>{capitalize(poke.name)}</h2>
						<img src={poke.sprites.front_default} alt={poke.name} />
					</div>
				))}
			</div>
			<button onClick={fetchPokemon}>Add another Pokémon</button>
		</div>
	);
};
