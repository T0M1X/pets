import { Component } from "react"
import Searchbar from "./searchbar";
import SitterCard from "./sitterCard";
import sitters from "../../lib/sitters.json";
import Map from "./map";

export default class SearchSitters extends Component {
    constructor() {
        super();

        this.state = {
            searchText: ""
        }
    }

    onTextChanged(newText) {
        this.setState({
            searchText: newText
        });
    }

    filteredResults() {
        return sitters.filter(sitter => sitter.username.toLowerCase().includes(this.state.searchText) || sitter.bio.toLowerCase().includes(this.state.searchText) || sitter.postcode.toLowerCase().includes(this.state.searchText));
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"layout"}>
                    <Searchbar onChange={(text) => { this.onTextChanged(text) }} />
                    <div className={"sitterList"}>
                        {
                            this.filteredResults().map((sitter) => (<SitterCard sitter={sitter} key={sitter.username} />))
                        }
                        {
                            this.filteredResults().length === 0 && <p>Oh no! We didn't find any sitters for you :(</p>
                        }
                    </div>
                </div>
                <Map />
            </div>
        );
    }
}