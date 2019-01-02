import React from 'react';

const Footer = () => {
  return (
    <div className="footerBar">
      <h1>
        <p>Copyright © 2018 by 4Horsemen LTD.
All rights reserved. This site or any portion thereof
may not be reproduced or used in any manner whatsoever
without the express written permission of the creators
except for the use of brief quotations in an online review.</p>
        <br/>
        <p>Follow us on Social Media</p>
        <ul className="socialIcons">
          <li><a className="facebook" target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/"><img className="icon"  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="facebook"/></a></li>
          <li><a className="twitter" target='_blank' rel='noopener noreferrer' href="https://twitter.com/"><img className="icon"  src="http://www.iconarchive.com/download/i82970/limav/flat-gradient-social/Twitter.ico" alt="twitter"/></a></li>
          <li><a className="instagram" target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/?hl=en"><img  className="icon" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Instagram-512.png" alt="instagram"/></a></li>
          <li><a className="linkedIn" target='_blank' rel='noopener noreferrer' href="https://uk.linkedin.com/"><img className="icon"  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt="linkedIn"/></a></li>
        </ul>
      </h1>
    </div>
  );
};

export default Footer;
