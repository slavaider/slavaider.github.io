import './ItemStatusFilter.css';
import React from "react";

const ItemStatusFilter = (props) => {
    return (
        <div className="ItemStatusFilter">
            <button className="btn btn-secondary" onClick={props.onClickHandler('all')} type="button">All</button>
            <button className="btn btn-secondary" onClick={props.onClickHandler('favorite')} type="button">Active</button>
            <button className="btn btn-secondary" onClick={props.onClickHandler('done')} type="button">Done</button>
        </div>
    );
}

export default ItemStatusFilter;
