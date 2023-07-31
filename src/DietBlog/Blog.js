import { useParams } from "react-router-dom"
import { BASE_URL } from "./DietBlog";
import { useState, useEffect } from 'react'

export default function Blog() {
    //get id from url
    const { id } = useParams();
    //fetch blog post with id
    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/diet_blogs/${id}`)
        .then(response => response.json())
        .then(data => setBlogPost(data));
    }, []);



    return (
        <div>
            <h1>{blogPost.title}</h1>
            <img src={blogPost.image} alt={blogPost.title} />
            <p>{blogPost.content}</p>
        </div>
    )
}
