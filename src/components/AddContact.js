import React, { Component } from 'react'
import {Consumer} from '../Context';
import TextInputGroup from './layouts/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        errors: {}
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name === '') {
            this.setState({errors: { name: 'Name is required'}})
            return
        }
        if (email === '') {
            this.setState({errors: { email: 'Email is required'}})
            return
        }
        if (phone === '') {
            this.setState({errors: { phone: 'Phone is required'}})
            return
        }
        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            
        }
        dispatch({type:'ADD_CONTACT', payload:newContact})
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors: {}
        })

        this.props.history.push('/');
        
    }

  render() {
      const { name, email, phone, errors} = this.state;
    return (
        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div>
                        <div className='card mb-3'>
                            <div className='card-header display-4'><span className='text-info'>Add</span> Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label='Name'
                                                    name='name'
                                                    type='text'
                                                    value={name}
                                                    onChange={this.onChange}
                                                    placeholder='Enter Name'
                                                    error={errors.name}
                                                
                                    />
                                
                                    <TextInputGroup label='Email'
                                                    name='email'
                                                    type='email'
                                                    value={email}
                                                    onChange={this.onChange}
                                                    placeholder='Enter Email'
                                                    error={errors.email}
                                    />
                                    <TextInputGroup label='Phone'
                                                    name='phone'
                                                    type='text'
                                                    value={phone} 
                                                    onChange={this.onChange}
                                                    placeholder='Enter Phone Number'
                                                    error={errors.phone}
                                    />
                                    
                                    <input type='submit'
                                           value='Add Contact'
                                           className='btn btn-info btn-block'
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default AddContact;