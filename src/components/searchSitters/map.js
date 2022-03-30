import { Component } from "react"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { createRef } from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import "./style.css";


mapboxgl.accessToken = 'pk.eyJ1IjoibWFqYXNkZWFkIiwiYSI6ImNsMWNuNjVoejA5NzEzanA0aHQyYjloYnkifQ.I-9v2C5_SLo20jvDLzOD6w';
let map = null;

export default class Map extends Component {
    constructor(props) {
        super();

        this.state = {
            lng: -4.577086,
            lat: 54.080856,
            zoom: 5,
            markers: []
        };
        this.mapContainer = createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        map = new mapboxgl.Map({
            attributionControl: false,
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
        });
        this.outputPin();
    }

    outputPin() {
        this.state.markers.forEach(marker => {
            marker.remove();
        });
        this.state.markers = [];
        const sitters = this.props.filtered;
        sitters.forEach(sitter => {
            const el = document.createElement('div')
            el.className = 'marker';
            el.style.backgroundImage = `url(${sitter.profilePicture})`;
            el.style.width = `25px`;
            el.style.height = `25px`;
            el.style.backgroundSize = '100%';
            
            el.addEventListener('click', () => {
                window.alert(`Hello, I'm ${sitter.username}`);
            }); // TODO: Add links to the sitter pages here
                // 

            let pin = new mapboxgl.Marker(el).setLngLat([sitter.coordinates[1], sitter.coordinates[0]]).addTo(map);
            this.state.markers.push(pin)
        });
    }

    componentDidUpdate() {
        this.outputPin();
    }

    render() {
        return (
            <div className={'mapContainer'}>
                <div ref={this.mapContainer} className="mapTest" />
            </div>
        );
    }
}