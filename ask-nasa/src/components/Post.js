import React from 'react'

const Post = ({post}) => {
    
    return (
        <article className="post-of-the-day">
            {post.media_type === "video" ? <iframe width="560" height="315" title={post.title} src={post.url} frameBorder="0" allowFullScreen="true"></iframe> : <img src={post.url} alt={post.title}/> }
            <h2>{post.title}</h2>
            <p>{post.explanation}</p>
        </article>
    )
}
export default Post;