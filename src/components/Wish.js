import React from 'react'

const Wish = () => {
    return React.createElement(
        'div', 
        {id: 'divMessage', className: 'container'}, 
        
        React.createElement(
            'h1', 
            {id: 'header', className: 'card'},
            'Hello Mahesh'
        ))
}

export default Wish