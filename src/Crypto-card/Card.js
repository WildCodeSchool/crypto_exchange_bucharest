import React from 'react'
import './styles.css'

function Card(props) {

    return(
        <div className='card'>
            <div>
                {props.name}
                <span>
                    ({props.symbol})
                    </span>
            </div>
            <div className='percent'>
            </div>

            <div className='logo'>
            </div>

            <div className='price'>
                {props.price}
            </div>
        </div>
    )
}


export default Card;