import React from 'react'
import {Link} from 'react-dom'

const UserNew = props => (
    <Link to={"jarno.pl/todos/" + props.user.todo}>
        <div
            key={props.user.name}

        >
            {props.user.name.first} {props.user.name.last}
        </div>
    </Link>
)

export default UserNew