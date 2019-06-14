import React, { Component } from 'react';
import Video from './Video';

class VideoList extends Component
{
    render(){
        return(
            <div>
                "VideoList"
                {this.props.videoList ?  
                    this.props.videoList.map(video => {
                        return <Video video={video}/>
                    })    
                : 
                 "Loading..."}
            </div>
        )
    }
}

export default VideoList;