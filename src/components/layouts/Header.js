import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header =  ({ branding }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0'>
        <div className='container'>
            <a href='/' className='navbar-brand'>{branding}</a>
            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'><Link to='/' className='nav-link'><i className='fas fa-home'/> Home</Link></li>
                    <li className='navbar-item'><Link to='/addcontact' className='nav-link'><i className='fas fa-plus'/> Add Contacts</Link></li>
                    <li className='navbar-item'><Link to='/about' className='nav-link'><i className='fas fa-question'/> About</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

Header.defaultProps = {
    branding: 'My Contact Manager'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
}


export default Header