import  { Component }  from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment"



const CommentArea = ({selectedBookAsin}) => {
   
  
    return(
        <div>
            
        <CommentList bookId={selectedBookAsin} />
        <AddComment bookId={selectedBookAsin} />
            

        </div>
        
    )
    


 }

export default CommentArea