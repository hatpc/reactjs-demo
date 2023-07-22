import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './player.css';
import {faPlay, faHeart} from "@fortawesome/free-solid-svg-icons";

function Player(props) {
    const { player } = props || {};

    return (
        <>
            <div className='my-player row'>
                    <div className='col-1 px-0'>
                        <span className='top1'>
                            {player?.id}
                        </span>
                    </div>
                    <div className='col-2 px-0'>
                        <img src={player?.cover} className='avt-img' alt="img-player"/>
                    </div>
                    
                    <div className='iconform col-1 px-0'>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>

                    <div className='name-music col-3 px-0'>
                    {player?.name}
                    </div>
                    
                <div className='music-tab col-2 px-0'>
                    <span className='music-Real'>
                    {player?.artist}
                    </span>
                </div>

                <div className='music-times col-2 px-0'>
                {player?.times}
                </div>

                <div className='iconform col-1 px-0'>
                    <FontAwesomeIcon className={`${player?.isLiked ? 'active' : ''}`} icon={faHeart}/>
                </div>


            </div>
        </>
    )

}

export default Player;
