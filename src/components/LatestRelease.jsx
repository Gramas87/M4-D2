import books from "../data/scifi.json";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import {useState } from "react";

const LatestRelease = () => {
  const [selected, SetSelected] = useState("");
  /*{state = {
    selected: ""
  }}*/
  /*{select = (asin) => {this.setState({selected:asin}) }} */
  const select = (asin) => {
    SetSelected(asin);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={10}>
          <div className="bg-dark row">
            {books.map((book) => {
              return (
                <SingleBook select={select} key={book.asin} bookData={book} />
              );
            })}
          </div>
        </Col>
        <Col md={2}>
          
        <CommentArea selectedBookAsin={selected} />
        </Col>
      </Row>
    </Container>
  );
};

export default LatestRelease;
