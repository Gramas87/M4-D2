import books from '../data/scifi.json'
import  { Component }  from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment"



class CommentArea extends Component {
   
render() { 
    return(
        <div>
            
        <CommentList bookId={this.props.selectedBookAsin} />
        <AddComment bookId={this.props.selectedBookAsin} />
            

        </div>
        
    )
    

}
 }

export default CommentArea