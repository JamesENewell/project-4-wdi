import React from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
// import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';
import Footer from '../common/Footer';


class DevelopersShow extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/developers/${this.props.match.params.id}`)
      .then(res => this.setState({
        developer: res.data
      }))
      .catch(err => this.setState({
        error: err.message
      }));
  }

  render() {
    if (this.state.error) return <h2 className = "title is-2" > { this.state.error } </h2>;
    if (!this.state.developer) return <h2 className = "title is-2" > Loading... </h2>;
    return (

      <div className = "columns" >
        <div className = "column is-one-third" >
          <figure className = "image is-square" >
            <img className = "devImage" src = {this.state.developer.image}/>
          </figure >
          <hr/>
          <Link className = "button new-project" to = {'/projects/new'} > Contact this developer</Link>

          <p className = "" > See below for { this.state.developer.companyName } most recent projects </p>
          <figure className= "image is-3by2">
            <img className = "devPortfolio" src = {this.state.developer.portfolio[0]} alt = "Test"/>
          </figure>
          <hr/>
          <figure className= "image is-3by2">
            <img className = "devPortfolio" src = {this.state.developer.portfolio[1]} alt = "Test"/>
          </figure>
          <hr/>
          <figure className= "image is-3by2">
            <img className = "devPortfolio" src = {this.state.developer.portfolio[2]} alt = "Test"/>
          </figure>
          <hr/>
          <figure className= "image is-3by2">
            <img className = "devPortfolio" src = {this.state.developer.portfolio[3]} alt = "Test"/>
          </figure>
        </div>

        <div className = "column is-two-thirds">

          <h1 className = "title" > Company Name:</h1><p>{this.state.developer.companyName}</p>

          <hr/>

          <h1 className = "title" > Company Size:</h1><p>{this.state.developer.companySize}</p>

          <hr/>

          <h1 className = "title" > Description:</h1><p>{this.state.developer.description}</p>

          <hr/>

          <h1 className = "title" > Skills:</h1><p className = "skillsColor">{this.state.developer.skills} </p>

          <hr/>

          <h1 className = "title" > Telephone Number:</h1><p> {this.state.developer.telNumber}</p>

          <hr/>

          <h3 className = "title" > Email:</h3><a href = "mailto:somone@4horse-men.com" > {this.state.developer.email} </a>

          <GoogleMap location = {this.state.developer.location}/>

          <Footer/>

        </div>
      </div>
    );
  }
}

export default DevelopersShow;
