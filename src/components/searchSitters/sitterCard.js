import { Component } from "react"
import "./style.css";

export default class SitterCard extends Component {
    constructor(props) {
        super();

        this.state = {
            sitter: props.sitter
        }
    }

    render() {
        return (
            <div className={'card'}>
                <img src={ this.state.sitter.profilePicture }/>
                <div className={'cardinfo'}>
                    <p className={'username'}>{ this.state.sitter.username }</p>
                    <p className={'bio'}>{ this.state.sitter.bio }</p>
                    <p className={'postcode'}>{ this.state.sitter.postcode }</p>
                </div>
            </div>
        );
    }
}