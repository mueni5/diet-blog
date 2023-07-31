import './DietBlog.css';
function Card({image, title}){
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
        </div>
    );

}

export default function DietBlog() {
    const blogPosts = [
   {
      "id":1,
      "title":"Diet Blog 1",
      "image":"https://images.unsplash.com/photo-1611095777879-9e9a3e0a5b7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldCUyMGJsb2d8ZW58MHx8MHx8\u0026ixlib=rb-1.2.1\u0026w=1000\u0026q=80",
      "content":"This is the first diet blog",
      "created_at":"2023-07-31T18:52:17.322Z",
      "updated_at":"2023-07-31T18:52:17.322Z"
   },
   {
      "id":2,
      "title":"Diet Blog 2",
      "image":"https://images.unsplash.com/photo-1611095777879-9e9a3e0a5b7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldCUyMGJsb2d8ZW58MHx8MHx8\u0026ixlib=rb-1.2.1\u0026w=1000\u0026q=80",
      "content":"This is the second diet blog",
      "created_at":"2023-07-31T18:52:17.329Z",
      "updated_at":"2023-07-31T18:52:17.329Z"
   },
   {
      "id":3,
      "title":"Diet Blog 3",
      "image":"https://images.unsplash.com/photo-1611095777879-9e9a3e0a5b7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldCUyMGJsb2d8ZW58MHx8MHx8\u0026ixlib=rb-1.2.1\u0026w=1000\u0026q=80",
      "content":"This is the third diet blog",
      "created_at":"2023-07-31T18:52:17.335Z",
      "updated_at":"2023-07-31T18:52:17.335Z"
   },
   {
      "id":4,
      "title":"Diet Blog 4",
      "image":"https://images.unsplash.com/photo-1611095777879-9e9a3e0a5b7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldCUyMGJsb2d8ZW58MHx8MHx8\u0026ixlib=rb-1.2.1\u0026w=1000\u0026q=80",
      "content":"This is the fourth diet blog",
      "created_at":"2023-07-31T18:52:17.341Z",
      "updated_at":"2023-07-31T18:52:17.341Z"
   }
    ]


    return (
        <div>
            <h1>Diet Blog</h1>
            <div className="card-container">
            {blogPosts.map((post, index) => (
            <Card key={index} image={post.image} title={post.title} />
        ))}
        </div>
        </div>
    )
}
