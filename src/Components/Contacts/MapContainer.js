import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './mapLoader.json';
import { GoogleApiWrapper, Map } from 'google-maps-react';

const mapLoader = (props) => {
    const defaultMapLoaderOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid"
            }
    };

    return <Lottie options={defaultMapLoaderOptions} />;
}

export class MapContainer extends Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                center={{
                    lat: 28.359411,
                    log: 75.587795
                }}
                zoom={14}>
                
            </Map>
        );
    }
}

export default GoogleApiWrapper({
        apiKey: ("api key"),
        LoadingContainer: mapLoader()
    }
)(MapContainer);