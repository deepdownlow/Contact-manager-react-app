import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../Context'

class Contact extends Component {
  state = {
    display: true
  }
  onShowClick = () => {
    this.setState({display: !this.state.display})
  }
  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  }
  
  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              {this.state.display
              ?
              <div className='card card-body mb-3'>
                <h4 className='text-info'> {name} {''}
                    <i style={{cursor:'pointer'}} className='fas fa-angle-down' onClick={this.onShowClick}/> 
                    <i className='fas fa-times' style={{cursor:'pointer', color:'red', float:'right'}} onClick={this.onDeleteClick.bind(this, id, dispatch)} />
                </h4>
              </div>
              :
              <div className='card card-body mb-3'>
                <h4 className='text-info'>{name} {' '}
                          <i style={{cursor:'pointer'}} className='fas fa-angle-up' onClick={this.onShowClick}/>
                          <i className='fas fa-times' style={{cursor:'pointer', color:'red', float:'right'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
                </h4>
                <ul className='list-group'>
                    <li className='list-group-item'><span className='text-info'>Email:</span> {email}</li>
                    <li className='list-group-item'><span className='text-info'>Contact:</span> {phone}</li>
                </ul>
          </div>
          }
      </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact
