import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'

function DeepDrive() {
  return (
      <Container fluid className="deep g-0 p-5">
          <Container>
              <h2 className='text-white pb-4'>Take a Deep Dive</h2>
          <Row>
              <Col>
              <Card className='border-0'>
      <Card.Img variant="top" src="images/the_bank_of_20xx.png" />
      <Card.Body>
        <Card.Title style={{height:'100'+'px'}}>The Bank of 20XX: Navigating Uncharted Waters</Card.Title>
        <Button variant="primary" className='deep-btn'>Download Whitepaper</Button>
      </Card.Body>
    </Card>
              </Col>
              <Col>
              <Card className='border-0'>
      <Card.Img variant="top" src="images/power_of_options.png"  />
      <Card.Body>
      <Card.Title style={{height:'100'+'px'}}>The Power of Options and Choices – A Definitive View on Banking-as-a-Service</Card.Title>
        <Button variant="primary" className='deep-btn'>Read eBook</Button>
      </Card.Body>
    </Card>
              </Col>
              <Col>
              <Card className='border-0'>
      <Card.Img variant="top" src="images/how_can_bank_moves.png" />
      <Card.Body>
      <Card.Title style={{height:'100'+'px'}}>How Can Banks Move Beyond Transactional Relations to Build Lasting Customer Relationships?</Card.Title>
        <Button variant="primary" className='deep-btn'>Read Article</Button>
      </Card.Body>
    </Card>
              </Col>
              </Row>
              </Container>
    </Container>
  )
}

export default DeepDrive
