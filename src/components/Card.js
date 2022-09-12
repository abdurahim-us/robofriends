import React from "react";

const Card = ({name, id, email}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}/?size=260x240`}/>
            <p className="f4 b">{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default Card