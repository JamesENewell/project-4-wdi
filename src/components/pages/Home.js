import React from 'react';
import SimpleSlider from '../images/Slider';
import Footer from '../common/Footer';

const Home = () => {
  return (

    <div className="hero-body">
      <div className="container is-fluid">

        <h1 className="title homeTitle">
          Four Horsemen Development Platform
        </h1>
        <h2 className="subtitle homeSubtitle">

          No Design experience? Its not the end of the world.

          <div className="text-wrapper">We are&nbsp;
            <div className="animated-words">
              <strong>
                <span className="am1 nl">Creators</span>
                <span className="am1 nl">Innovators</span>
                <span className="am1 nl">Mind Changers</span>
                <span className="am1 nl">Dragonslayers</span>
                <span className="am1 nl">Dreamweavers</span>
                <span className="am1 nl">Heartbreakers</span>
                <span className="am1 nl">The Four Horsemen</span>
              </strong>
            </div>
            <div className="animateWordLast"></div>
          </div>
          <div>
            <hr />
            <SimpleSlider/>
            <hr />
            <p className="clickMe"> Click the left of right buttons to check out some of this weeks featured work...</p>

          </div>
          <Footer />
        </h2>
      </div>
    </div>

  );
};

export default Home;
