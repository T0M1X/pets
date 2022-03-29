import { Component } from "react"
import "./style.css";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { createRef } from "react";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFqYXNkZWFkIiwiYSI6ImNsMWNuNjVoejA5NzEzanA0aHQyYjloYnkifQ.I-9v2C5_SLo20jvDLzOD6w';

export default class Map extends Component {
    constructor(props) {
        super();

        this.state = {
            lng: -4.577086,
            lat: 54.080856,
            zoom: 5
        };
        this.mapContainer = createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            attributionControl: false,
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
        });
        
    }

    render() {
        return (
            <div className={'map-wrapper'}>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}