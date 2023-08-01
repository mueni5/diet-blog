import "./DietBlog.css"
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
        .then(data => {
            data.content = data.content.replace(/(\r\n|\n|\r)/gm, "<br>");
            setBlogPost(data);
        })
    }, []);

    console.log(blogPost);



    return (
        <div className="blog-container">
            <div className="back-button">
                <a href="/blog">Back</a>
            </div>

                <h1>{blogPost.title}</h1>
            <div className="blog-image">
                <img src={blogPost.image} alt={blogPost.title} />
            </div>


            <div className="blog-content">
                <div dangerouslySetInnerHTML={{__html: blogPost.content}}>
                </div>
            </div>
        </div>
    )
}
