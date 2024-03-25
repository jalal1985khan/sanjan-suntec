import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';

function LinksExample() {
  return (
    <>
      <style>
        {
          `
       
          `
        }
      </style>
<Container className="b_content p-3 mt-4" >
<Row>
<Col className="wbg-main" lg={10} sm={12}>
    <div className="left-opp">
<h3 className="m-head">Banking is full of opportunities.</h3>
<h2 className="t-head">How can SunTec Xelerate help you make the most of them?</h2>
</div>
</Col>
<Col lg={2} sm={12}>
<div className="right-opp">
<iframe
      width="600"
      height="400"
      src={`https://www.youtube.com/embed/ngHqPQsV0Cc`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
                
    />
</div>    
</Col>
</Row>


</Container>
</>
  );
}

export default LinksExample;