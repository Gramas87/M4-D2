
import {Component} from "react";
import SingleComment from "./SingleComment"

class CommentList extends Component {
    state = {
        comments: [], 
    }
  componentDidUpdate = (PreviousProps) => {
     if (PreviousProps.bookId !== this.props.bookId){
       this.FetchComments()
     }
  }

  FetchComments = async () => {
    
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzU1NTgyZWExZDAwMTViYjA0YWEiLCJpYXQiOjE2NDQ1MDA0MjgsImV4cCI6MTY0NTcxMDAyOH0.a6Q2NpfxpUJtp61HabF-ThX6mDgsZoZBdiMZ0fLGKWo",
          },
        }
      );
      if (response.ok) {
        console.log("hello")
        let data = await response.json();
        this.setState({comments: data})
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return <div>
        {this.state.comments.map((comment) => <SingleComment key={comment._id} commentData={comment}/> )}
    </div>;
  }
}

export default CommentList;
