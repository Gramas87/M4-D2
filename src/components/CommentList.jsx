import SingleComment from "./SingleComment"
import {useState, useEffect} from "react"


const CommentList = ({bookId}) =>{
    /*{state = {
        comments: [], 
    }}*/
    const [comments, setComments] = useState([]);

   
   
  

 const FetchComments = async () => {
    
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzU1NTgyZWExZDAwMTViYjA0YWEiLCJpYXQiOjE2NDQ1MDA0MjgsImV4cCI6MTY0NTcxMDAyOH0.a6Q2NpfxpUJtp61HabF-ThX6mDgsZoZBdiMZ0fLGKWo",
          },
        }
      );
      if (response.ok) {
        console.log("hello")
        let comments = await response.json();
        //{this.setState({comments: data})}//
        setComments(comments)
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchComments(bookId)
  }, [bookId])
 
    return <div>
        {comments.map((comment) => <SingleComment key={comment._id} commentData={comment}/> )}
    </div>;
  
}

export default CommentList;

