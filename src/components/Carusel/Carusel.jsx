import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from "../../Assets/images/image1.png"
import imageTwo from "../../Assets/images/image2.png"
import imageThree from "../../Assets/images/image3.png"
import './styleCarusel.css'


class MyCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          (<img src={imageOne} />),
          (<img src={imageTwo} />),
          (<img src={imageThree} />),
          (<img src={imageOne} />),
          (<img src={imageTwo} />),
          (<img src={imageThree} />),
          (<img src={imageOne} />),
          (<img src={imageTwo} />),

        ],
      }
      this.onchange = this.onchange.bind(this);
    }
  
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} style={{paddingLeft: `10px`}}/>
        <div className="card">
          
        </div>
      </div>
      );
    }
  }

  export default MyCarousel