import React, {useState, useEffect} from 'react';
import Post from './Post';
import { getData } from '../utils';

const GetPostData = ({date}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const dateParam = date === "" ? "" : "&date=" + date;
        getData('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + dateParam)
            .then(data => {
                setPost(data);
            })
            .catch(error => alert(error));
    }, [date])

    return (
        <Post post={post}/>
    )
};

export default GetPostData;