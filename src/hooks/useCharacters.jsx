import { useEffect, useState } from 'react'
import { reqCharacter } from '../service/character'

export const useCharacters = (page, searchTerm) => {
    const [characters, setCharacters] = useState([])
    const [pag, setPag] = useState(1)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page, 20, searchTerm)
                setCharacters(data.results || [])
                setPag(Math.ceil(data.total / 20))
            } catch (error) {
                console.error('Error fetching characters:', error)
                setCharacters([])
                setPag(1)
            }
        }
        fetchCharacters()
    }, [page, searchTerm])

    return {
        characters,
        pag
    }
}
