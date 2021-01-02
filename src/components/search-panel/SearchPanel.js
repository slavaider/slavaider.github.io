import './SearchPanel.css';
import React from "react";
import ItemStatusFilter from "../item-status-filter/ItemStatusFilter";

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: 'all'
        }
    }

    onFilter = (type) => {
        this.setState({type})
        const filter = {
            text: this.state.text,
            type: type
        }
        this.props.onFilterHandler(filter)
    }

    onChangeText = (event) => {
        this.setState({text: event.target.value})
        const filter = {
            text: event.target.value,
            type: this.state.type
        }
        this.props.onFilterHandler(filter)
    }

    render() {
        return (
            <div className="SearchPanel mb-2">
                <div className="input-group">
                    <input type="text" value={this.state.text} onChange={this.onChangeText} className="form-control"
                           placeholder="Search"/>
                    <ItemStatusFilter onClickHandler={(type) => this.onFilter.bind(this, type)}/>
                </div>
            </div>
        );
    }
}

export default SearchPanel;
