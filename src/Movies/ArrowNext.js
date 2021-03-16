import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Movies.css'

function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`btn btn-default ${props.className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleRight}
                color="gray"
                size="2x"
            />
        </div>
    );
}

export default NextArrow