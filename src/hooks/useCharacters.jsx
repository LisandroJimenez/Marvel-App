import { useEffect, useState } from "react"
import { reqCharacter } from "../service/character"
export const useCharacters = (page) => {
    const [characters, setCharacter] = useState()
    const [pag, setPag] = useState(1)


    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page)
                setCharacter(data.results)
                setPag(Math.ceil(data.total / data.limit))
            } catch (error) {
                console.error
            }
        }
        fetchCharacters()
    }, [page])


    const [arreglo, setArreglo] = useState([])

    const handleMarvel = async (categoria, e) => {
        e.preventDefault()
        try {
            const data = await reqPoke(categoria)
            setArreglo(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return {
        characters,
        pag
    }
}
