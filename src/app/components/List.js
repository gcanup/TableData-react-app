import React, { Component } from 'react';
import ListItem from './ListeItem'
import Form from "./Form";
import FakeUsers from '../user.service';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            sortTypes: {
                name: '',
                email: '',
                phone: '',
            }
        }
    }

    componentDidMount() {
        console.log("List componentDidMount");
        //create fake users
        this.setState({
            users: FakeUsers.Users
        })
    }

    handleItemAdd(item) {
        let tmpItems = this.state.users;
        tmpItems.push(item);
        this.setState({
            users: tmpItems
        });
    }
    handleDelete(item) {
        //Find the position of the item in the list
        const pos = this.state.users.map(user => user.id).indexOf(item.id);

        //If the item is in the list, can be skiped
        if (pos > -1) {
            let tmpItems = this.state.users;
            tmpItems.splice(pos, 1); //Delete the item from the list

            //Update the component state
            this.setState({
                users: tmpItems
            });
        }
    }

    updateItem(item) {
        //Find the position of the item in the list
        const pos = this.state.users.map(user => user.id).indexOf(item.id);

        //If the item is in the list, can be skiped
        if (pos > -1) {
            let tmpItems = this.state.users;

            tmpItems[pos] = item; //update the item

            //Update the component state
            this.setState({
                users: tmpItems
            });
        }
    }

    handleSort = (e, param) => {
        e.preventDefault();

        let tmpItems = this.state.users;
        let tmpSortTypes = this.state.sortTypes;

        console.log(tmpSortTypes);

        tmpItems.sort((a, b) => {
            if (this.state.sortTypes[param] === 'asc') {
                tmpSortTypes[param] = 'desc';
                return (a[param] < b[param]) ? 1 : ((b[param] < a[param]) ? -1 : 0);
            } else {
                tmpSortTypes[param] = 'asc';
                return (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0);
            }
        });

        this.setState({
            users: tmpItems,
            sortTypes: tmpSortTypes
        });

    }

    render() {

        let listItems = this.state.users.map(user => {
            return <ListItem key={user.id} user={user} deleteItem={this.handleDelete.bind(this)} updateItem={this.updateItem.bind(this)}></ListItem>;
        });

        return (
            <div className="main">

                <Form itemAdd={this.handleItemAdd.bind(this)}></Form>

                <table>
                    <thead>
                        <tr>
                            <th onClick={(e) => this.handleSort(e, 'name')}>Name</th>
                            <th onClick={(e) => this.handleSort(e, 'email')}>Email address</th>
                            <th onClick={(e) => this.handleSort(e, 'phone')}>Phone number</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
