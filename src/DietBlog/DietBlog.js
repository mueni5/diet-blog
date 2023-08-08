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
    const [question, setQuestion] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/diet_blogs`)
        .then(response => response.json())
        .then(data => setBlogPosts(data));
    }, []);


    const sendQuestion = () => {
        const data = {
            user_id: 1,
            question: question
        }

        fetch(`${BASE_URL}/diet_questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            setQuestion("");
            alert("Your query has been received. We will get back to you soon");
        })
    }


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
            <h1>Ask a question</h1>
            <p>Do you have any question regarding diet?<br/> Ask the question below and we will get back with an answer</p>
                <textarea className="appointment-textarea" placeholder="Ask your question here" onChange={
                    (event) => {
                        setQuestion(event.target.value);
                    }
                } value={question}></textarea>
        <br/>
                <button className="appointment-button" onClick={
                    () => {
                        sendQuestion();
                    }
                }>Send</button>
            </div>
        </div>

    )
}
