import React from 'react'

const Student = (props) => {
    return (
        <div>
            <h3>Developer Name :  {props.name}</h3>
            <h3>Skill Set      :  {props.skill}</h3><br/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Student