import './DietBlog.css';
import { useState, useEffect } from 'react'

export const BASE_URL = "http://127.0.0.1:3000"

function Card({image, title}){
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-title">
                <span>{title}</span>
            </div>
        </div>
    );

}

export default function DietBlog() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/diet_blogs`)
        .then(response => response.json())
        .then(data => setBlogPosts(data));
    }, []);


    return (
        <div>
        <div className="header">
            <h1>Diet Blog</h1>
            <span className="subheading">A collection of diet blogs</span>
        </div>
            <div className="card-container">
            {blogPosts.map((post, index) => (
            <a href={`/blog/${post.id}`}>
                <Card key={index} image={post.image} title={post.title} />
            </a>
        ))}
            </div>

        {/*Book an appointment form*/}
        <div className="appointment-form">
            <h1>Book an appointment</h1>
            <p>Click the button below to book an appointment with a dietitian</p>
                <button className="appointment-button">Book</button>
            </div>
        </div>

    )
}
