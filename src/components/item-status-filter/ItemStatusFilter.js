import './ItemStatusFilter.css';
import React from "react";

class ItemStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
            active: false,
            done: false
        }
    }

    changeFilter = (filter) => {
        const reset = this.state
        Object.keys(reset).map((key) => {
            return reset[key]=false
        })
        reset[filter]=true
        this.setState({reset})
        this.props.onClickHandler(filter)
    }

    render() {
        return (
            <div className="ItemStatusFilter">
                <div className="btn-group" role="group">
                    <button
                        className={[this.state.all ? 'active' : null, 'btn', 'btn-info', 'ml-1', 'mr-1'].join(' ')}
                        onClick={() => this.changeFilter('all')}
                        type="button"
                    >All
                    </button>
                    <button
                        className={[this.state.active ? 'active' : null, 'btn', 'btn-info', 'mr-1'].join(' ')}
                        onClick={() => this.changeFilter('active')}
                        type="button"
                    >Active
                    </button>
                    <button
                        className={[this.state.done ? 'active' : null, 'btn', 'btn-info'].join(' ')}
                        onClick={() => this.changeFilter('done')}
                        type="button"
                    >Done
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemStatusFilter;
