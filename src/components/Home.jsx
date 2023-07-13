import React, { useState } from 'react'
import axios from 'axios'


function Home() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokeValue, setPokeValue] = useState(false)
    const [pokemon, setPokemon] = useState({
            name: "", 
            species: "",
            image: "",
            hp: "",
            attack: "",
            defense:"" ,
            special_attack:"" ,
            special_defense: "",
            speed: "",
            type: "",
        })

    const pokemonSearch = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemon({
                    name: pokemonName, 
                    species: res.data.species.name,
                    image: res.data.sprites.other.dream_world.front_default,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    special_attack: res.data.stats[3].base_stat,
                    special_defense: res.data.stats[4].base_stat,
                    speed: res.data.stats[5].base_stat,
                    type: res.data.types[0].type.name,
                }),
            setPokeValue(true)
            }
        );
    };

  return (
    <div className='text-center text-white   bg-[#FAD643]  '>
        <div className='bg-[#5CB8FF]'> 
            <div className='flex flex-row justify-center pt-5 '>
                <h1 className='text-5xl  font-bold pr-6 pt-2 text-black '>Pokedex</h1> 
                <img  src='./pokemon.png' />
            </div>
            <input onKeyPress={pokemonSearch} onChange={(e) => {setPokemonName(e.target.value)}} placeholder='Type any pokemon name' className='text-3xl text-black border-black border-4 rounded-xl mt-10'   /> <br />
            <button onClick={pokemonSearch} className='mt-5 bg-[#373B80] p-4 mb-5 w-36 rounded-xl font-bold'>Search</button>
        </div>

        <div className='text-black bg-[#5E739F] flex justify-center m-auto pb-9 mt-4 w-80 rounded-xl opacity-90 '>{!pokeValue ? (<h1 className='text-3xl mt-6 pb-0 '>Choose Poke</h1>) : (  
            <div className='text-2xl mt-1'>
                <h1 className='text-5xl uppercase font-bold mb-2'>{pokemon.name}</h1>
                <img className="mx-auto" src={pokemon.image} />
                <h1><span className='font-bold'>Hp: </span>{pokemon.hp}</h1>
                <h1><span className='font-bold'>Attack: </span> {pokemon.attack}</h1>
                <h1><span className='font-bold'>Defense: </span> {pokemon.defense}</h1>
                <h1><span className='font-bold'>Special Attack: </span> {pokemon.special_attack}</h1>
                <h1><span className='font-bold'>Special Defense: </span> {pokemon.special_defense}</h1>
                <h1><span className='font-bold'>Speed: </span> {pokemon.speed}</h1>
                <h1><span className='font-bold'>Type: </span> {pokemon.type.toUpperCase()}</h1>
            </div>
        )}</div>

    </div>
  )
}

export default Home