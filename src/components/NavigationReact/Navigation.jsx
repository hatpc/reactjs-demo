import './Navigation.css';
import React, {useState} from 'react';

import {
    faHouse,
    faMessage,
    faBars,
    faUser,
    faPhotoFilm

} from "@fortawesome/free-solid-svg-icons";
import NavigationItem from './NavigationItem'

const Navigation = () => {

    const [isActive, setIsActive] = useState('Home')
    const [top, setTop] = useState(0);

    const handleOnClick = (event, title, index) => {
        event.preventDefault(); // tranh cac action khi click vao the a
        setIsActive(title)
        setTop(index*50)
    }

    const navigationList = [
        {
            icon: faHouse,
            title: 'Home',
            link: 'https://transform.tools/html-to-jsx'
        },
        {
            icon: faUser,
            title: 'Profile',
            link: 'https://transform.tools/html-to-jsx'
        },
        {
            icon: faMessage,
            title: 'Message',
            link: 'https://transform.tools/html-to-jsx'
        },
        {
            icon: faPhotoFilm,
            title: 'Photos',
            link: 'https://transform.tools/html-to-jsx'
        }, {
            icon: faBars,
            title: 'Settings',
            link: 'https://transform.tools/html-to-jsx'
        },
    ]

    return (
        <>
            <title>Navigation Style 01</title>
            <div className="navigation">
                <ul> {
                    navigationList?.map((navigation, index) => (
                        <div key={index} onClick={
                            (event) => handleOnClick(event, navigation.title, index)
                        }>
                            <NavigationItem icon={
                                    navigation.icon
                                }
                                title={
                                    navigation.title
                                }
                                link={
                                    navigation.link
                                }
                                isActive={isActive}/>
                        </div>
                    ))
                }
                    <div className="indicator" style={{top: `${top}px`}}/>
                </ul>
            </div>
        </>
    );
}


export default Navigation;
