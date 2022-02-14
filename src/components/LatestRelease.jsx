import books from '../data/scifi.json'
import SingleBook from './SingleBook'
import {Container, Row, Col} from "react-bootstrap"
import CommentArea from './CommentArea'
import { Component } from 'react'


class LatestRelease extends Component {
  state = {
    selected: ""
  }
  select = (asin) => {this.setState({selected:asin}) }
  
  render() {
  return (
    <Container fluid>
    <Row>
      <Col md={10}><div className="bg-dark row">{books.map((book)=>{return <SingleBook select={this.select} key={book.asin} bookData={book} />})}</div></Col>
       <Col >  <CommentArea selectedBookAsin={this.state.selected} />   </Col >
    </Row>
  </Container>)
    }
  }

export default LatestRelease


