/* global google */
import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.location,
      zoom: 13,
      styles: [{
        'featureType': 'water',
        'stylers': [{
          'saturation': 43
        },
        {
          'lightness': -11
        },
        {
          'hue': '#0088ff'
        }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [{
          'hue': '#ff0000'
        },
        {
          'saturation': -100
        },
        {
          'lightness': 99
        }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [{
          'color': '#808080'
        },
        {
          'lightness': 54
        }
        ]
      },
      {
        'featureType': 'landscape.man_made',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#ece2d9'
        }]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#ccdca1'
        }]
      },
      {
        'featureType': 'road',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#767676'
        }]
      },
      {
        'featureType': 'road',
        'elementType': 'labels.text.stroke',
        'stylers': [{
          'color': '#ffffff'
        }]
      },
      {
        'featureType': 'poi',
        'stylers': [{
          'visibility': 'off'
        }]
      },
      {
        'featureType': 'landscape.natural',
        'elementType': 'geometry.fill',
        'stylers': [{
          'visibility': 'on'
        },
        {
          'color': '#b8cb93'
        }
        ]
      },
      {
        'featureType': 'poi.park',
        'stylers': [{
          'visibility': 'on'
        }]
      },
      {
        'featureType': 'poi.sports_complex',
        'stylers': [{
          'visibility': 'on'
        }]
      },
      {
        'featureType': 'poi.medical',
        'stylers': [{
          'visibility': 'on'
        }]
      },
      {
        'featureType': 'poi.business',
        'stylers': [{
          'visibility': 'simplified'
        }]
      }
      ]
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.location
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return ( <
      div className = 'google-map'
      ref = {
        element => this.mapCanvas = element
      }
    />
    );
  }
}

export default GoogleMap;
