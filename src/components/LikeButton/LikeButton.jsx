import React, {useState} from 'react';
import './LikeButton.css';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LikeButton = () => {
    const [likes, setLikes] = useState(1);

    const handleLike = () => {
        setLikes(likes => likes + 1);
    };

    return (
        <button className='buttonlike'
            onClick={handleLike}>
            <div className='icon-like'>
                <FontAwesomeIcon icon={faThumbsUp}
                    size='xl'/>
            </div>
            <div className='content'>
                <h5>LikeButton</h5>
            </div>
            <span className='count'> {likes} </span>
        </button>
        
    );
};

export default LikeButton;
