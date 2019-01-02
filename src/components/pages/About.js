import React from 'react';
import Footer from '../common/Footer';

const About = () => {
  return (
    <section className="aboutSection">

      <div>
        <img className="joshImage" src="https://i.pinimg.com/280x280_RS/4b/e3/3a/4be33a4f7cf7a1c42b1a1047168ad6ba.jpg"
          alt="Josh creator of FHP" />
      </div>
      <h1 className="about-us">Joshua Storm Taljaard</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="bubble bubbleJosh">
        <blockquote>Josh really knows people, and this site proves it! I was nervous about which company to choose but Josh assumered me that all the companies they choose on this site were all trustworthy!</blockquote>
        <cite>Abraham Lincoln</cite> </div>
      <div>
        <br />
        <p>Email:</p><a href="mailto:test@example.com">Josh@4horse-men</a>
      </div>
      <hr />
      <div>
        <img className="jamesImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPz5yb3ijkkzP0mQfjHajOx7vTifXo_t67563EMnUtfTBW01X"
          alt="James creator of FHP" />
      </div>
      <h1 className="about-us">James Newell</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="bubble">
        <blockquote> An Excellent Person, I would trust this site with my business any day! Other than being a world class designer James knows business and what people want!</blockquote>
        <cite> Alan Sugar </cite> </div>
      <br />
      <p>Email:</p><a href="mailto:test@example.com">James@4horse-men</a>
      <hr />
      <Footer/>
    </section>

  );
};



export default About;
