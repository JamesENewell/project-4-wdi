const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Developer = require('../models/developer');
const User = require('../models/user');
const Project = require('../models/project');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Developer.create([{
    companyName: 'Marks & Spencer Ltd',
    companySize: 'Large',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/fFL2hPR.jpeg',
    skills: 'Python, Ruby, Javascript',
    // location: 'Kingston Upon Thames',
    location: { lat: 51.412229, lng: -0.300556},
    telNumber: '0203 442 1767',
    email: 'info@MandS.com',
    portfolio: ['https://www.dustfolio.com/img_front/modele_zoom.jpg', 'https://richwp.com/wp-content/uploads/2013/07/handsome-portfolio-website.jpg', 'http://cdn.instantshift.com/wp-content/uploads/2012/04/facpwdfi-04.jpg', 'http://www.onextrapixel.com/wp-content/uploads/2015/06/6-NewsTech.jpg']
  },{
    companyName: 'Achilleus Designs',
    companySize: 'Small',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://s3-media2.fl.yelpcdn.com/bphoto/zcI5ktHMaO7GTMRQo02Zjg/l.jpg',
    skills: 'Bulma, Angular',
    // location: 'Manhatten',
    location: {lat: 40.7484, lng: -73.9857},
    telNumber: '0208 112 2566',
    email: 'info@AD.com',
    portfolio: ['https://cdn-images-1.medium.com/max/1600/1*6cpWeq1_VMYtd1LgHwxKug.jpeg', 'https://en-support.files.wordpress.com/2014/04/portfolio-orvis.png', 'https://file.mockplus.com/image/2018/02/f8a7d385-0ef3-4727-9813-ee65592e4eef.png', 'http://themefurnace.com/wp-content/uploads/2016/08/free-wordpress-portfolio-themes.jpg']
  },{
    companyName: 'MI6',
    companySize: 'Unknown',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/CS9QZHJ.jpeg',
    skills: 'Unknown',
    // location: 'Unknown',
    location: {lat: 51.4872 , lng: 0.1245},
    telNumber: 'Unknown',
    email: 'info@government',
    portfolio: ['https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/portfolio-wordpress-themes.jpg', 'https://i.ytimg.com/vi/GKRQC4fLNHs/maxresdefault.jpg', 'http://gallery.stylishwebdesigner.com/wp-content/uploads/2013/09/web-design-inspiration1.jpg', 'https://www.themely.com/wp-content/uploads/2017/08/Septera-Theme.png']

  },{
    companyName: 'Network Code',
    companySize: 'Medium',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://pbs.twimg.com/profile_images/696378871126462464/c2DJbncv_400x400.png',
    skills: 'React.js, Sass, Node.js, Ruby on Rails',
    // location: 'London',
    location: {lat: 51.528013, lng: -0.132117},
    telNumber: '0208 332 5566',
    email: 'info@Networkcode.com',
    portfolio: ['https://estateagentswebsitedesign.co.uk/wp-content/uploads/estate-agents-website-template-22.png', 'http://www.madebyoli.co.uk/img/website-design-2017-qualifa-1-sm.jpg', 'https://cdn.athemes.com/wp-content/uploads/hares-brewery-wordpress-theme.jpg', 'http://psd.fanextra.com/wp-content/uploads/2010/02/darksite11.jpg']
  },{
    companyName: 'Julian & Gerry Coders',
    companySize: 'Medium',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/7Kj4GvE.jpeg',
    skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
    // location: 'Paris',
    location: {lat: 48.8584, lng: 2.2945},
    telNumber: '0208 117 1253',
    email: 'info@jandg.com',
    portfolio: ['https://i2.wp.com/www.styleshout.com/wp-content/uploads/2017/10/thumb-preview-hola.jpg', 'https://d2zav2bjdlctd5.cloudfront.net/uploads/2014/12/flusk.jpg', 'http://pollmappr.com/wp-content/uploads/2018/07/designer-website-background-web-page-design-images-background-background-editing-picsart-templates.jpg', 'https://i2.wp.com/www.styleshout.com/wp-content/uploads/2018/11/thumb-preview-template-kairos.jpg']
  },{
    companyName: 'Mike & Nicks\' Websites',
    companySize: 'Small',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/VBzQzIN.jpeg',
    skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
    // location: 'Birmingham',
    location: {lat: 52.413154, lng: -1.919435},
    telNumber: '0208 328 8907',
    email: 'info@Mikeandnicweb.com',
    portfolio: ['http://psd.fanextra.com/wp-content/uploads/2010/02/darksite21.jpg', 'https://richwp.com/wp-content/uploads/2013/07/handsome-portfolio-website.jpg', 'https://images.template.net/wp-content/uploads/2015/08/31120620/Business-Responsive-Website-Template1-788x621.jpg', 'https://cdn.dreamtemplate.com/product/images/26/334/20070221120048_1.jpg']
  },{
    companyName: 'Castrid\'s Web Studio',
    companySize: 'Small',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://dsocdn.akamaized.net/Assets/Images_Upload/2018/01/14/a71c295a-f962-11e7-9a05-1b44e7e70ea5_web_scale_0.4557291_0.4557291__.jpg?maxheight=416&maxwidth=568&scale=both',
    skills: 'Bulma, Art, Ruby, Python, PHP, Javascript',
    // location: 'Relay Building',
    location: {lat: 51.515243, lng: -0.072338},
    telNumber: '0208 555 233',
    email: 'info@castrid.com',
    portfolio: ['https://cdn.dreamtemplate.com/product/images/8/848/20060726095617_1.jpg', 'https://speckyboy.com/wp-content/uploads/2016/04/html5_template_17.jpg', 'http://www.oswt.co.uk/startbootstrap/img/stylish-portfolio.jpg', 'https://static.wixstatic.com/media/7844b187ff7cf425fb41189c5a076324f3c67deddde8eee7f4a2f23674931f1f.jpg']
  },{
    companyName: 'Two & a half Towers',
    companySize: 'Small',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/Oh3RrLz.jpeg',
    skills: 'Python, PHP, Javascript, React.js',
    // location: 'Stockholm',
    location: {lat: 59.326968, lng: 18.072475},
    telNumber: '0203 343 1283',
    email: 'info@twotowers.com',
    portfolio: ['https://jimdo-lc-assets-www-prod.global.ssl.fastly.net/u1XgPxp2Ah3hIYDYz4GKe8xcR.png', 'https://i.ytimg.com/vi/7ewISBdx-9E/maxresdefault.jpg', 'https://s.tmimgcdn.com/blog/wp-content/uploads/2016/07/consulting-website-templates-10.jpg', 'https://cdn.freshdesignweb.com/wp-content/uploads/site/Music-Website-Templates.jpg']
  },{
    companyName: 'Eye of Bella inc.',
    companySize: 'Small',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://imgur.com/g80EAxz.jpeg',
    skills: 'Bulma, Javascript, React.js, Angular.js',
    // location: 'Edinburgh',
    location: {lat: 55.948619, lng: -3.199838},
    telNumber: '0208 438 8497',
    email: 'info@bella.com',
    portfolio: ['https://i.ytimg.com/vi/y_GB-_ViAS8/maxresdefault.jpg', 'https://www.themexpert.com/images/easyblog_articles/382/b2ap3_thumbnail_31.png', 'https://d2zav2bjdlctd5.cloudfront.net/uploads/2017/11/Elixir-multipurpose-websites-templates.png', 'https://s-media-cache-ak0.pinimg.com/originals/1c/e7/47/1ce74708e272a143df3354a6d32915ce.jpg']
  }])
    .then(developers => console.log(`${developers.length} developer(s) created`))

    .then(() => User.create([{
      username: 'A',
      email: 'jn@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'B',
      email: 'js@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'C',
      email: 'mg@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    },{
      username: 'D',
      email: 'gm@test.com',
      password: '1234',
      passwordConfirmation: '1234'
    }]))
    .then(users => console.log(`${users.length} user(s) created`))

    .then(() => Project.create([{
      projectName: 'Winning',
      projectType: 'Small',
      projectBrief: 'To Win',
      skillsRequired: 'Javascript'
    }]))
    .then(projects => console.log(`${projects.length} project(s) created`))


    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
