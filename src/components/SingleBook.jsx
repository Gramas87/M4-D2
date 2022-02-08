import { Card } from "react-bootstrap";

const SingleBook = ({bookData}) => {
    const {  title, img, category, price } = bookData
  return (
    <div className="col">
      <Card className="bg-dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>            
          <Card.Title className="text-light">{title}</Card.Title>
          <Card.Text className="text-light">{price}</Card.Text>
          <Card.Text className="text-light">{category}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
