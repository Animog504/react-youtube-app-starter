import React, { Component } from 'react';

class Video extends Component
{
    render(){
        let video = this.props.video
        return(
             this.props.video ?  
                <div>
                    <h2>{video.snippet.title}</h2>
                    <img src={video.snippet.thumbnails.default.url}></img>
                    <p>{video.snippet.description}</p>
                    <br></br>
                
                
                
                
                
                </div>
                : "Loading..."
        )
    }
}

export default Video;