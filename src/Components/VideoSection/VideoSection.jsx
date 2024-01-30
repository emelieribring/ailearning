import React from 'react';
import './videoSection.css';

export default function VideoSection() {

  return (
    <div className='video-section'>
        <video
          className='video'
          src={require('../../videos/video.mp4')}
          type='video/mp4'
          controls="true">
        </video>
    </div>
  )
}
