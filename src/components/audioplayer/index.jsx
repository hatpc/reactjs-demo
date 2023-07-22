import React, {useState} from 'react';
import Player from './player';
import Audio from './audio';

function AudioPlayer() {
    const playList = [
        {
            id: 1,
            name: 'Luon Yeu Doi 1',
            cover: require('../../musiclist/music/1.jpg'),
            src: require('../../musiclist/music/LuonYeuDoi-Den-8692742.mp3'),
            namemusic: 'My Stress',
            artist: 'Meee',
            times: '3:54',
            isLiked: true
        },
        {
            id: 2,
            name: 'Kia bong dang ai 2',
            cover: require('../../musiclist/music/2.jpg'),
            src: require('../../musiclist/music/KiaBongDangAi-Phao-8544353.mp3'),
            namemusic: 'Mirage',
            artist: 'Meee',
            times: '2:44',
            isLiked: true
        },
        {
            id: 3,
            name: 'coaycuaanhay',
            cover: require('../../musiclist/music/3.jpg'),
            src: require('../../musiclist/music/coaycuaanhay.mp3'),
            namemusic: 'My Stress',
            artist: 'Meee',
            times: '5:24',
            isLiked: false
        },
        {
            id: 4,
            name: 'LuonYeuDoi',
            cover: require('../../musiclist/music/4.jpg'),
            src: require('../../musiclist/music/LuonYeuDoi-Den-8692742.mp3'),
            namemusic: 'The Hills',
            artist: 'Meee',
            times: '3:54',
            isLiked: false
        }, {
            id: 5,
            name: 'coaycuaanhay',
            cover: require('../../musiclist/music/5.jpg'),
            src: require('../../musiclist/music/coaycuaanhay.mp3'),
            namemusic: 'Paralyzed',
            artist: 'Meee',
            times: '4:12',
            isLiked: false
        }, {
            id: 6,
            name: 'ChimSau',
            cover: require('../../musiclist/music/6.jpg'),
            src: require('../../musiclist/music/ChimSau-MCKTrungTran-7205660.mp3'),
            namemusic: 'Timeless',
            artist: 'Meee',
            times: '2:36',
            isLiked: false
        }, {
            id: 7,
            name: 'DontCoi',
            cover: require('../../musiclist/music/1.jpg'),
            src: require('../../musiclist/music/DontCoi-RPTOrijinnRonboogz-8345160.mp3'),
            namemusic: 'Timeless',
            artist: 'Meee',
            times: '2:26',
            isLiked: false
        },

    ];

    const [activeMusic, setActiveMusic] = useState(playList?.[0]);

    return (
        <div className="d-flex justify-content-between">
            <div className='d-flex flex-column'>
                {
                playList?.map(player => <div key={
                        player?.id
                    }
                    onClick={
                        () => {
                            setActiveMusic(player);
                        }
                }>
                    <Player player={player}/>
                </div>)
            } </div>
            <Audio music={activeMusic} />
        </div>
    );
}

export default AudioPlayer;
