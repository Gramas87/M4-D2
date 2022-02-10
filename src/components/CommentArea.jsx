import books from '../data/scifi.json'
import  { Component }  from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment"



class CommentArea extends Component {
   
render() { 
    return(
        <div>
            <CommentList bookId={this.props.bookData.asin} />
            <AddComment bookId={this.props.bookData.asin} />

        </div>
        
    )
    

}
 }

export default CommentArea