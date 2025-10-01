import React, { useState, useEffect } from 'react';


function Blog() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(results => {
            console.log(results)
            setPosts(results)

        })
        .catch(err => console.log(err))
    }, [])

    return ( 
        <>
            <h2>Page de Blog</h2>

            { posts && posts.map((post) => (

                post.id <= 20 && 

                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            ))}
        </> 
    );
}

export default Blog;