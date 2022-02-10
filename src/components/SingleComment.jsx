import { ListGroup } from "react-bootstrap"



const SingleComment = ({commentData}) => (
    <div>
        <ListGroup>
  <ListGroup.Item>{commentData.author}</ListGroup.Item>
  <ListGroup.Item>{commentData.rate}</ListGroup.Item>
  <ListGroup.Item> {commentData.comment} </ListGroup.Item>

</ListGroup>
        
   </div>
   
  
    
)

export default SingleComment