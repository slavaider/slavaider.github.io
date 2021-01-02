import './ItemStatusFilter.css';
import React from "react";

const ItemStatusFilter = (props) => {
    return (
        <div className="ItemStatusFilter">
            <button className="btn btn-success" onClick={props.onClickHandler('all')} type="button">All</button>
            <button className="btn btn-success" onClick={props.onClickHandler('favorite')} type="button">Favorite</button>
            <button className="btn btn-success" onClick={props.onClickHandler('done')} type="button">Done</button>
        </div>
    );
}

export default ItemStatusFilter;
