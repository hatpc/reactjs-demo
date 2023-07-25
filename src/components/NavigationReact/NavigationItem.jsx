import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationItem = ({icon, title, link, isActive}) => {

    return (
        <li className={
            `list ${
                isActive === title ? 'active' : ''
            }`
        }>
            <a href={link}>
                <span className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <span className="text">
                    {title}</span>
            </a>
        </li>
    )
}

export default NavigationItem;
