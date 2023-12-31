import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
function LinksExample() {
  return (

<Container className="f_content text-center  mt-4">
<h2 className="mt-5 mb-5">Featured Content</h2>
<Container >
<Row className="center">
<Col className="text-center d-flex justify-content-center" sm={3}>
<Link href="/" className="ft-text">
 <div className="f_hover">
<svg xmlns="http://www.w3.org/2000/svg" id="featureIcon1" width="95.843" height="70.611" viewBox="0 0 95.843 70.611" fill="#95519e" ><path data-name="Path 5571" d="M42.104 53.634a5.26 5.26 0 0 1 1.666-6.079l2.109-1.727H1.948V1.948H70.92v16.035h1.948V0H.004v47.776h29.348a5.256 5.256 0 0 1 1.422 5.858 6.522 6.522 0 0 1-5.914 4.431h-4.833v8.206h32.816v-8.209h-4.831a6.522 6.522 0 0 1-5.913-4.431Zm-9.494.654a7.16 7.16 0 0 0-.692-6.513h9.042a7.158 7.158 0 0 0-.69 6.513 8.832 8.832 0 0 0 2.657 3.775H29.946a8.815 8.815 0 0 0 2.659-3.775Zm18.289 5.724v4.31H21.974v-4.31h28.92Z"></path><path data-name="Path 5572" d="M14.137 42.518V27.027h-8.6v15.492h8.6ZM7.488 28.975h4.7v11.6h-4.7Z"></path><path data-name="Path 5573" d="M40.732 42.518V5.48h-8.6v37.038ZM34.084 7.43h4.7v33.14h-4.7Z"></path><path data-name="Path 5574" d="M27.436 42.518V19.639h-8.6v22.88h8.6Zm-6.649-20.931h4.7v18.982h-4.7Z"></path><path data-name="Path 5575" d="M58.733 42.518h8.6V27.027h-8.6Zm1.948-13.543h4.7v11.6h-4.7Z"></path><path data-name="Path 5576" d="m75.816 43.867-2.671 2.671-2.4-2.4a15.665 15.665 0 1 0-1.377 1.377l2.4 2.4-2.67 2.669 20.027 20.027 6.718-6.718ZM49.362 24.131a13.788 13.788 0 0 1 2.723-2.1v18.538H47.16a13.692 13.692 0 0 1 2.2-16.44Zm0 19.348c-.308-.308-.6-.63-.868-.961h5.539V21.075a13.68 13.68 0 1 1-4.672 22.4Zm22.491 7.105 3.964-3.964 17.272 17.272-3.964 3.964Z"></path></svg>
<p className="fs-4">Insights</p></div> </Link>  
</Col>    
<Col className="text-center d-flex justify-content-center" sm={3}>
<Link href="/events" className="ft-text">
<div className="f_hover" sm={3}>
<svg xmlns="http://www.w3.org/2000/svg" id="featureIcon2" width="82.744" height="77.629" viewBox="0 0 82.744 77.629" fill="#95519e" ><path data-name="Path 5593" d="M11.479 0a.981.981 0 0 0-.981.981v4.808H8.83A8.83 8.83 0 0 0 0 14.619v39.643a8.83 8.83 0 0 0 8.83 8.83h29.925a22.762 22.762 0 1 0 34.537-26.69V14.718a8.83 8.83 0 0 0-8.83-8.83h-1.669V.982a.981.981 0 1 0-1.962 0V5.79H12.459V.982a.981.981 0 0 0-.981-.981Zm69.368 54.846a20.9 20.9 0 1 1-6.156-14.715 20.8 20.8 0 0 1 6.156 14.715Zm-19.918-47.1v3.826a.981.981 0 1 0 1.962 0V7.849h1.668a6.867 6.867 0 0 1 6.868 6.868v20.408a22.763 22.763 0 0 0-25.117 1.57.981.981 0 0 0-.981-.883h-3.532a.981.981 0 0 0 0 1.962h3.042a22.761 22.761 0 0 0-6.77 23.253H8.83a6.868 6.868 0 0 1-6.868-6.868V14.717A6.868 6.868 0 0 1 8.83 7.849h1.668v3.826a.981.981 0 1 0 1.962 0V7.849Z"></path><path data-name="Path 5594" d="M28.061 26.393h3.434a.981.981 0 0 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5595" d="M14.325 26.393h3.434a.981.981 0 1 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5596" d="M41.797 26.393h3.434a.981.981 0 1 0 0-1.962h-3.434a.981.981 0 0 0 0 1.962Z"></path><path data-name="Path 5597" d="M55.534 26.393h3.434a.981.981 0 1 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5598" d="M28.061 37.873h3.434a.981.981 0 0 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5599" d="M14.325 37.873h3.434a.981.981 0 1 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5600" d="M28.061 49.254h3.434a.981.981 0 0 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5601" d="M14.325 49.254h3.434a.981.981 0 1 0 0-1.962h-3.434a.981.981 0 1 0 0 1.962Z"></path><path data-name="Path 5602" d="M59.851 44.545a.982.982 0 0 0-1.963 0v12.068a.981.981 0 0 0 .981.981h9.125a.981.981 0 0 0 0-1.962h-8.143Z"></path></svg>
<p className="fs-4 ">Events</p>
</div></Link>            
</Col>    
<Col className="text-center d-flex justify-content-center" sm={3}>
<Link href="/press_release/suntec-business-solutions-appoints-pramod-perumparambil-as-chief-strategy-and-transformation-officer-csto" className="ft-text">
<div className="f_hover" sm={3}>  
<svg xmlns="http://www.w3.org/2000/svg" id="featureIcon3" width="83.369" height="69.299" viewBox="0 0 83.369 69.299" fill="#95519e" class="f3"><path id="Path_5605" data-name="Path 5605" d="M152.984 95.2a7.349 7.349 0 0 0-7.35 7.35v18.375h-10.605a7.456 7.456 0 0 0-7.35 7.351v26.249a10.079 10.079 0 0 0 10.08 9.975h61a12.285 12.285 0 0 0 12.285-12.285v-49.666a7.455 7.455 0 0 0-7.35-7.35Zm-15.225 67.2a7.982 7.982 0 0 1-7.98-7.875v-26.252a5.355 5.355 0 0 1 5.25-5.25h10.605v31.5a7.982 7.982 0 0 1-7.875 7.875Zm71.189-59.849v49.664a10.185 10.185 0 0 1-10.185 10.185h-54.914a9.978 9.978 0 0 0 3.885-7.875v-51.976a5.355 5.355 0 0 1 5.25-5.25H203.7a5.355 5.355 0 0 1 5.25 5.25Z" transform="translate(-127.679 -95.199)"></path><path id="Path_5606" data-name="Path 5606" d="M303.449 190.817h16.275a1.049 1.049 0 0 0 1.049-1.05 1.155 1.155 0 0 0-1.049-1.05h-16.275a1.156 1.156 0 0 0-1.05 1.05 1.05 1.05 0 0 0 1.05 1.05Z" transform="translate(-269.639 -171.183)"></path><path id="Path_5607" data-name="Path 5607" d="M335.368 266.532h-31.92a1.05 1.05 0 0 0-1.05 1.05 1.157 1.157 0 0 0 1.05 1.05h31.92a1.05 1.05 0 0 0 1.05-1.05.945.945 0 0 0-1.05-1.05Z" transform="translate(-269.639 -234.403)"></path><path id="Path_5608" data-name="Path 5608" d="M335.368 343.84h-31.92a1.156 1.156 0 0 0-1.05 1.05 1.05 1.05 0 0 0 1.05 1.05h31.92a.945.945 0 0 0 1.05-1.05 1.05 1.05 0 0 0-1.05-1.05Z" transform="translate(-269.639 -297.221)"></path></svg>
<p className="fs-4">News</p>
</div></Link>  
</Col>   
</Row>


</Container>


</Container>

  );
}

export default LinksExample;