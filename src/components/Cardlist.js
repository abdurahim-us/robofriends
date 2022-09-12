import React, { Fragment } from 'react'
import Card from './Card'

const Cardlist = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map(user => {
                    return (
                        <Card 
                            key={user.id} 
                            name={user.name} 
                            id={user.id} 
                            email={user.email}
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default Cardlist