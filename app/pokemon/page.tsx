'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Pokemon {
  name: string
  url: string
  id: number
  image: string
  types: string[]
}

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    fetchPokemons()
  }, [limit])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      const data = await response.json()
      
      // Buscar detalhes de cada Pokémon
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { name: string; url: string }) => {
          const detailResponse = await fetch(pokemon.url)
          const details = await detailResponse.json()
          return {
            name: pokemon.name,
            url: pokemon.url,
            id: details.id,
            image: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
            types: details.types.map((type: any) => type.type.name)
          }
        })
      )
      
      setPokemons(pokemonDetails)
    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-cyan-300',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-400',
      psychic: 'bg-pink-500',
      bug: 'bg-lime-500',
      rock: 'bg-yellow-800',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300'
    }
    return colors[type] || 'bg-gray-400'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pokédex
              </h1>
              <p className="text-gray-600 mt-2">Explore o mundo dos Pokémon!</p>
            </div>
            <Link 
              href="/"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none shadow-sm"
          />
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="px-6 py-3 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none shadow-sm"
          >
            <option value={20}>20 Pokémon</option>
            <option value={50}>50 Pokémon</option>
            <option value={100}>100 Pokémon</option>
            <option value={151}>151 Pokémon (Gen 1)</option>
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        )}

        {/* Pokemon Grid */}
        {!loading && (
          <>
            <div className="mb-4 text-gray-600">
              Mostrando {filteredPokemons.length} de {pokemons.length} Pokémon
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPokemons.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex items-center justify-center">
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-32 h-32 object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 font-semibold">
                      #{pokemon.id.toString().padStart(3, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
                      {pokemon.name}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {pokemon.types.map((type) => (
                        <span
                          key={type}
                          className={`${getTypeColor(type)} text-white text-xs font-semibold px-3 py-1 rounded-full capitalize`}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && filteredPokemons.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">Nenhum Pokémon encontrado 😢</p>
          </div>
        )}
      </div>
    </div>
  )
}

