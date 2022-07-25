import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

 function PostPage () {
    const { postIndex } = useParams();

     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [data, setData] = useState([]);

     useEffect(() => {
         fetch(`http://localhost:3000/posts?index=${postIndex}`)
             .then(response => response.json())
             .then(
                 (result) => {
                     setIsLoaded(true);
                     setData(result);
                 },
                 (error) => {
                     setIsLoaded(true);
                     setError(error);
                 }
             )
     }, [postIndex])

     if (error) {
         return <div>Ошибка: {error.message}</div>;
     } else if (!isLoaded) {
         return <div>...</div>;
     } else {
         const name = data[0].name;
         const  picture = data[0].picture;
         const about = data[0].about;
         const date = data[0].date;
         const tags = data[0].tags;
         return (
             <div>
                 <h1> {name} </h1>
                 <img src={picture} alt=""/>
                 <div>{about}</div>
                 {
                     tags.length && tags.map((tag, index) => {
                         return (
                             <span key={index}>{tag} </span>
                         )
                     })
                 }
                 <h4>{date}</h4>
             </div>
         )
     }
}

export  default PostPage;