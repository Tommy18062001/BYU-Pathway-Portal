import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Pagination({num}) {
    return (
        <div className="pagination">
            <span><ExpandMoreIcon/></span>
            <p>{num} of 2</p>
            <span><ExpandMoreIcon/></span>
        </div>
    )
}

export default Pagination
