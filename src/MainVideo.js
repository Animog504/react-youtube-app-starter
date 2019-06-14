import React, { Component } from 'react';
import Video from './Video';

class MainVideo extends Component
{
    render(){
        let vid = this.props.mainVideo
        // console.log(vid.id.videoId)
        // const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return(
            <div>
                { this.props.mainVideo ?  
                    <div>
                        <h2>{vid.snippet.title}</h2>
                        <iframe src={`https://www.youtube.com/embed/${vid.id.videoId}}></iframe>`}></iframe>
                        <p>{vid.snippet.description}</p>
                        <br></br>
                    
                    
                    
                    
                    
                    </div>
                    : "Loading..."}
            </div>
        )
    }
}

export default MainVideo;