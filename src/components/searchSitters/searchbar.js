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
            <div className={'searchfield'}>
                <img src='https://cdn-icons-png.flaticon.com/512/875/875623.png' />
                <input className={'searchbar'} placeholder="Search for sitters..." type="text" onChange={(e) => { this.inputHandler(e) }} />
            </div>
        );
    }
}