import React from 'react'
import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';

function ShortCard({title,desc,img}) {
  return (
      <Card className="d-flex flex-row c-height" style={{background:'#F4F4F4'}}>
      <Card.Img className="card-icon-left" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ShortCard
