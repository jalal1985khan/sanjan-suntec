import {Container,Row, Col,Button} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link'

function LinksExample() {
  return (

<Container className="f_content text-center p-3 mt-0">
      <h2 className="mt-0 mb-5">Why Our Customers Count On Us</h2>

<Container className="counts mb-5">
<Row>
<Col className="b-box" sm={3}>
<div>
<h3 className="fs-1">4X</h3>
<p className="fs-5 h">Increase in<br/> Deposit Growth</p>
</div>            
<div><hr style={{marginTop:30 +'px'}} /></div>
<div>
<h3 className="fs-1">0</h3>
<p className="fs-5 ">Compliance Violations</p>
</div>
</Col>
<Col sm={1} className="line"><hr className="l-border"/></Col>
<Col className="b-box" sm={4}>
<div>
<h3 className="fs-1">3X</h3>
<p className="fs-5 h">Increase in <br />Customer Base</p>
</div>            
<div><hr style={{marginTop:33 +'px', marginBottom:30 +'px'}} /></div>
<div>
<h3 className="fs-2">Months to Days</h3>
<p className="fs-5 ">Launch New Pricing, Products & Offers</p>
</div>
</Col>
<Col sm={1} className="line"><hr className="l-border"/></Col>
<Col className="b-box" sm={3}>
<div>
<h3 className="fs-1">2X</h3>
<p className="fs-5 h">Increase in Product to Customer Ratio</p>
</div>            
<div><hr style={{marginTop:33 +'px'}} /></div>
<div>
<h3 className="fs-1">60M+</h3>
<p className="fs-5 ">Reduction in Revenue Leakage</p>
</div>
</Col>
          
</Row>
</Container>
<Link className="mt-5 b-btn fs-5" href="https://www.suntecgroup.com/wp-content/uploads/2022/06/Corporate-Brochure.pdf">Explore how we can help you</Link>
</Container>

  );
}

export default LinksExample;