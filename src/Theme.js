import * as React from "react";
import Navbar from "./Navbar";

import Example from "./Example";
import Geocode from "react-geocode";

import {geolocated} from "react-geolocated";


class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            brand: 'ReactStrap'
        };
        Geocode.setApiKey("AIzaSyBXTmesBPc-8KOZCuc6faAfucV0kwgaT7I");

        this.initMap = this.initMap.bind(this);
    };

    componentDidMount() {
        this.getHospitals()
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    getHospitals() {
        const axios = require('axios');

        axios.get('http://localhost/larapi-master/public/medicalUnits')
            .then(this.initMap)
            // .then(function (response) {
            // console.log(response);
            // this.handleReq(response);
            // })
            .catch(function (error) {
                console.log(error);
            });

    }

    initMap(response) {
        console.log(response);
        var map;

        map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
                lat: this.props.coords.latitude,
                lng: this.props.coords.longitude
            },
            zoom: 14
        });
        let marker = new window.google.maps.Marker({
            position: {
                lat: this.props.coords.latitude,
                lng: this.props.coords.longitude
            },
            title: "You",
            map: map
        });
        for (let hospital of response.data.medical_units) {

            Geocode.fromAddress(hospital.locatie).then(
                response => {
                    // const { lat, lng } = response.results[0].geometry.location;
                    let coordinates = response.results[0].geometry.location;
                    // console.log(lat, lng);
                    let marker = new window.google.maps.Marker({
                        position: coordinates,
                        title: hospital.nume,
                        map: map
                    });
                },
                error => {
                    console.error(error);
                }
            );

        }
    }

    render() {
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage} = this.state;
        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Jumbotron currentPage={currentPage} jumboTitle={jumboTitle} jumboText={jumboText} jumboBtn={jumboBtn} changeBrand={this.handleChangeBrand}>*/}
                {/*<Page currentPage={currentPage} />*/}

                <div id={"home"}>
                    <Example/>
                </div>
                {/*<MapDemo/>*/}
                {/*<MapContainer google={this.props.google}/>*/}
                <div id={"container-map"}>
                <div id="map" style={{height: '80vh', width: '80vw'}}></div>
                </div>


            </div>
        )
    }
}

Theme.propTypes = {
    // name: React.PropTypes.string
};

Theme.defaultProps = {
    jumboTitle: 'Hello World!',
    jumboText: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    jumboBtn: 'Learn React'
};

// ReactDOM.render(
//     <Theme />,
//     document.getElementById('root')
// );

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Theme);