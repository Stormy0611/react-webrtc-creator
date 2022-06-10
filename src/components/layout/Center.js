import React from 'react'
import { useNavigate } from 'react-router-dom'

const Center = (props) => {

    let navigate = useNavigate();

    const handleClick = (e) => {
        // console.log(e.target, e.type)
        // props.onchange(true)
        navigate('/session')
    }

    return (
        <div className='Center'>
            <div className='Text' >
            </div>
            <div className='Logo' />
            <div className='CreateBtn' onClick={handleClick} />              
            <div className='BtnText' onClick={handleClick} />
            <div className='Arrow' onClick={handleClick} />
        </div>
    )
}

export default Center