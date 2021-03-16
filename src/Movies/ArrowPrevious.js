import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './Movies.css'

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleLeft}
                color="gray"
                size="2x"
            />
        </div>
    );
}

export default PrevArrow