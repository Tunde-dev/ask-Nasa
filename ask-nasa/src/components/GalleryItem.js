import React from 'react';
import { getYouTubeVideoId } from '../utils'

const GalleryItem = ({post}) => {

    const getThumbnail = () => {
       return post.media_type === "video" ? "https://img.youtube.com/vi/" + getYouTubeVideoId(post.url) + "/hqdefault.jpg" : post.url;
    }
    const divStyle = {
        backgroundImage: "url(" + getThumbnail() + ")" 
    }

    return (
        <div className="thumbnail" style={divStyle}>
           
        </div>
    )
}

export default GalleryItem;