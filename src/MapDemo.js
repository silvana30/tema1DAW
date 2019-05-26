import React from "react";
import {geolocated} from "react-geolocated";
import {GoogleMapReact} from 'google-map-react';

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapDemo extends React.Component {
    constructor(props) {
        super(props);
     this.state={

             lat: 0 ,
             lng: 0
     }

    };
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 20
    };

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
                <div style={{height: '80vh', width: '80vw'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyCK4-b3aLCJ8Wl0Ml7fnLgH1qtXgkliYuw'}}
                    defaultCenter={{
                    lat: this.props.coords.latitude,
                    lng: this.props.coords.longitude
                    }}
                    defaultZoom={this.props.zoom}
                        yesIWantToUseGoogleMapApiInternals>
                        {/*<Marker*/}
                        {/*title={'The marker`s title will appear as a tooltip.'}*/}
                        {/*name={'Current place'}*/}
                        {/*position={{*/}
                        {/*lat: this.props.coords.latitude,*/}
                        {/*lng: this.props.coords.longitude*/}
                        {/*}} />*/}

                        {/*<CurrentPin  lat= {this.props.coords.latitude}*/}
                        {/*lng= {this.props.coords.longitude} text={'You'}/>*/}
                    </GoogleMapReact>
                    {/*<Map google={this.props.google}*/}
                         {/*style={{width: '100%', height: '100%', position: 'relative'}}*/}
                         {/*className={'map'}*/}
                         {/*zoom={14}>*/}

                    {/*</Map>*/}

                </div>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }

    // renderMarkers(map, maps) {
    //     let marker = new maps.Marker({
    //         position: {this.state.lat},
    //         map,
    //         title: 'Hello World!'
    //     });
    // }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(MapDemo);