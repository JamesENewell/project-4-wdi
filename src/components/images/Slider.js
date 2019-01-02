import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class SimpleSlider extends React.Component {

  constructor() {
    super();
    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    axios.get('/api/developers')
      .then(res => this.setState({ developers: res.data}));
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="sliderDiv">
        <div>
          <h3><img className="sliderImage" src="https://richwp.com/wp-content/uploads/2013/07/handsome-portfolio-website.jpg"
            alt="Four Horsemen Development Platform" />

          </h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="http://cdn.instantshift.com/wp-content/uploads/2012/04/facpwdfi-04.jpg"
            alt="Four Horsemen Development Platform" />
          <button className="slider-button" href="http://a.com">M&S</button>
          </h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://www.webdesign-inspiration.com/uploads/design/2017-12/bachoy-com-46054.jpg"
            alt="Four Horsemen Development Platform" />
          <button className="slider-button" href="http://a.com">J&G</button>
          </h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="http://www.onextrapixel.com/wp-content/uploads/2015/06/6-NewsTech.jpg"
            alt="Four Horsemen Development Platform" />
          <button className="slider-button" href="http://a.com">M&N</button>
          </h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://cdn.shopify.com/s/files/1/0533/2089/files/dark-ui-luxury.png?v=1521140794"
            alt="Four Horsemen Development Platform" />
          <button className="slider-button" href="http://a.com">Network Code</button>
          </h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/html5-portfolio-website-templates.jpg"
            alt="Four Horsemen Development Platform" />
          <button className="slider-button" href="http://a.com">Mi6</button>
          </h3>
        </div>
      </Slider>

    );
  }
}

export default SimpleSlider;
