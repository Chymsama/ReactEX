import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader({ leader }) {
    return (
        <Media className='row'>
            <Media className='col-md-2' left>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="col-md-10 ml-4">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}

export default RenderLeader;
