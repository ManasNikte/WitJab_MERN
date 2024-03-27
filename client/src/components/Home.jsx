import React from 'react';
import Video from '../assets/videos/video.mp4'
const Home = () => {
    return (
        <section id ='home'>
            <header>
            
      <video src={Video} loop autoPlay muted></video>
      <h1>WitJab</h1>
      <p>One Stop Solution To Your IT Problems</p>
      <div className="headerbg"></div>
            </header></section>
    
    );
};

export default Home;
