import React from "react";

const Scroll = ({ children }) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid lightblue', height: '700px'}}>
            {children}
        </div>
    )
}

export default Scroll