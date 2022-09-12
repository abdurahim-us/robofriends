import React from "react";

const Searchbox = ({ onSearchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" onChange={onSearchChange} type='search' placeholder='search your robots' />
        </div>
    )
}

export default Searchbox