import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;
