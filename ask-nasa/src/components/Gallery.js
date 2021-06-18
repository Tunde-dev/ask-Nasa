import React, { useState, useEffect } from 'react';
import { getData } from '../utils';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate()-14)

        getData('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=' + startDate.toISOString().slice(0, 10))
            .then(data => {
                setItems(data);
            })
            .catch(error => alert(error));
    }, []);

    return(
        <div className="gallery d-flex">
        {items.map((item, index) => (
            <GalleryItem post={item} key={index}/>
            )
        )}
        </div>
    );
}

export default Gallery;