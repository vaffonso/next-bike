import PropTypes from 'prop-types';
import React from 'react';

const ShowCase = ({ imagePath, model }) => {
    return (
        <div>
            <img src={imagePath} alt={model} />
        </div>
    );
};

ShowCase.propTypes = {
    imagePath: PropTypes.any,
    model: PropTypes.any
};

export default ShowCase;
