import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay, faPause, faBackwardStep, faForwardStep, faRotate, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './audio.css';
  
  export default function Audio(props) {
    // nhận music từ player
    const { music } = props || {};
    const { name, artist, cover, src } = music;
  
    const audioRef = useRef();
  
    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
  
    const onChangeSlider = useCallback((event) => {
      audioRef.current.currentTime = event.target.value;
    }, []);
  
    const getTrackLength = () => {
      audioRef.current.addEventListener('loadedmetadata', function () {
        setDuration(audioRef.current.duration);
      });
    }
  
    useEffect(() => {
      getTrackLength();
    }, []);

    const getDuration = (duration) => {
      const minutes = Math.floor(duration / 60); 
      const seconds = Math.floor(duration % 60); 
  
      const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      return formattedDuration;
    };
  
    const onUpdateTimer = useCallback(() => {
      setTimer(audioRef.current.currentTime);
    }, []);

    const onTogglePlayMusic = useCallback(() => {
      if (isPlaying) {
        audioRef.current.pause(); 
      } else {
        audioRef.current.play(); 
      }
  
      setIsPlaying((prev) => !prev);
    }, [isPlaying]);
  
    const onReloadMusic = () => {
      audioRef.current.load();
    };
  
    return (
      <div className="musicSpace">
        <div className="music-player">
          <h1 className="music-name">{name}</h1>
  
          <p className="artist-name">{artist}</p>
  
          <div
            className={`disk ${isPlaying ? 'play' : ''}`}
            style={{
              backgroundImage: `url(${cover})`,
            }}
          />
  
          <div className="song-slider">
            <input
              type="range"
              max={duration}
              value={timer}
              className="slider"
              id="myRange"
              onInput={onChangeSlider}
            />
            <span className="current-time">{getDuration(timer)}</span>
            <span className="song-duration">{getDuration(duration)}</span>
          </div>
  
          <div className="controls">
          <button className="btn backward-btn">
          <FontAwesomeIcon icon={faXmark} />
            </button>
          
            <button className="btn backward-btn">
            <FontAwesomeIcon icon={faBackwardStep} />
            </button>
           
            <button className="play-btn pause" onClick={onTogglePlayMusic}>
              {isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faCirclePlay} />              
              )}
            </button>
            <button className="btn forward-btn">          
              <FontAwesomeIcon icon={faForwardStep} />          
            </button>
            <button className="btn forward-btn" onClick={onReloadMusic}>
            <FontAwesomeIcon icon={faRotate} />   
            </button>
          </div>
  
          <audio
            className="d-none"
            controls
            src={src}
            id="audioPlay"
            ref={audioRef}
            onTimeUpdate={onUpdateTimer}
           
          />
        </div>
      </div>
    );
  }
  