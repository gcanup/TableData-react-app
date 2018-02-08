import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    submitForm(event) {
        event.preventDefault();
        var timeStamp = Math.floor(Date.now());
        const data = {
            id: timeStamp, //Id should be unique, timestamp is always unique. (only for demo purpose)
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value
        } 
              
        this.props.itemAdd(data); 

        //clear the form after adding to the list
        event.target.reset();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <input type="text" placeholder="Full name" ref="name" />
                    <input type="email" placeholder="Email address" ref="email" />
                    <input type="tel" placeholder="Phone number" ref="phone" /> 
                    <input type="submit" value="Add new" />                                    
                </form>
            </div>
        );
    }
}

export default Form;
