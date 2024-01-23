import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';



var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  };

function LinksExample() {


  return (

<Container className="r_content text-center p-3 mt-4 mb-3 pb-5" fluid>
    <h2 className="mb-5 mt-3">What’s it Like to Work with Us</h2>
<OwlCarousel
          // className="owl-theme"
          loop={false}
          autoplay={false}
          margin={1}
          {...options}
      >
        <div class="item bg-review" style={{background:'#ff000000'}}>
            </div>
          <div class="item bg-review">
            <div className="ts-bg">
            <img src="/images/anu_testimonials.png" className="t_img"/>
            </div>
          <div className="t_bg">
           <p className="fs-4">Aruna Kunnath</p>
           <p className="txt-main">Group Manager - Quality</p>
           <p >Here at SunTec, we have a key role to play, and our voice is heard.”</p>
          </div></div>
          <div class="item bg-review">
            <div className="ts-bg">
            <img src="/images/tinku.png" className="t_img"/>
            </div>
          <div className="t_bg">
           <p className="fs-4">Tinku Susan Korah</p>
           <p className="txt-main">Analyst</p>
           <p >“If you have a mindset to learn new things, you can excel in whatever you do.”</p>
          </div></div>
        </OwlCarousel>


</Container>

  );
}

export default LinksExample;