import React, { useState } from 'react'

export const BuscarSp = ({ handleMarvel }) => {
    const [categoria, setCategoria] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleMarvel(categoria)
    }

    return (
        <>
            <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
                <form className='d-flex' onSubmit={handleSubmit}>
                    <input type='text'className='form-control me-2'value={categoria}onChange={(e) => setCategoria(e.target.value)}/>
                    <input type='submit' className='btn btn-outline-success' value='Buscar SuperHeroe'/>
                </form>
            </div>
        </>
    )
}
