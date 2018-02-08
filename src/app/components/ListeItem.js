import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deleteItem(this.props.user);
    }

    handleEdit(event) {
        event.preventDefault();
        this.setState({
            isEditing: true
        });
    }
    handleCancel(event) {
        event.preventDefault();
        this.setState({
            isEditing: false
        })        
    }
    handleSave(event) {
        event.preventDefault();
        const data = {
            id: this.props.user.id,
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value
        } 
        this.props.updateItem(data); 
        this.handleCancel(event);
    }

    renderItemOrEditField() {
        if (this.state.isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" placeholder="Full name" ref="name" defaultValue={this.props.user.name} />
                    </td>
                    <td>
                        <input type="email" placeholder="Email address" ref="email" defaultValue={this.props.user.email}  />
                    </td>
                    <td>
                        <input type="tel" placeholder="Phone number" ref="phone" defaultValue={this.props.user.phone}  />
                    </td>
                    <td>
                        <button type="button" onClick={this.handleCancel.bind(this)}>Cancel</button>
                        <button type="button" onClick={this.handleSave.bind(this)}>Save</button>                        
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.phone}</td>
                    <td>
                        <a onClick={this.handleEdit.bind(this)}>Edit</a> &nbsp;
                        <a onClick={this.handleDelete.bind(this)}>Delete</a>
                    </td>
                </tr>
            );
        }
    }

    render() {
        return this.renderItemOrEditField();
    }
}

export default ListItem;
