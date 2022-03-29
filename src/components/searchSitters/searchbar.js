import { Component } from "react"
import './style.css'

export default class Searchbar extends Component {
    constructor(props) {
        super();

    }

    inputHandler(e) {
        const lowerCase = e.target.value.toLowerCase();
        this.props.onChange(lowerCase);
    }

    render() {
        return (
            <input className={'searchfield'} placeholder="ENTER POSTCODE..."  type="text" onChange={(e) => { this.inputHandler(e) }}>

            </input>
        );
    }
}