import { Component } from "react"
import Searchbar from "./searchbar";
import SitterCard from "./sitterCard";
import Map from "./map";
import { sitters } from "../../lib/Sitters";
import { Navigate } from "react-router-dom";

export default class SearchSitters extends Component {
    constructor() {
        super();

        this.state = {
            searchText: "",
            goToProfile: "",
        }
    }

    onPinPressed(user) {
        this.setState({
            goToProfile: user
        });
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
            <div>
                { this.state.goToProfile && <Navigate to={`/profile/${this.state.goToProfile}`}></Navigate>}
                <div className={"container"}>
                    <div className={"layout"}>
                        <Searchbar onChange={(text) => { this.onTextChanged(text) }} />
                        <div className={"sitterList"}>
                            {
                                this.filteredResults().map((sitter) => (<SitterCard sitter={sitter} key={sitter.username} />))
                            }
                            {
                                this.filteredResults().length === 0 && <div className='noresult'><p>Oh no! We didn't find any sitters for you :(</p></div>
                            }
                        </div>
                    </div>
                    <Map filtered={this.filteredResults()} history={this.props.history} onPress={(user) => { this.onPinPressed(user) }}/>
                </div>
            </div>

        );
    }
}