import React, {Component} from 'react';
import UserList from './Users/UserList';

class User extends Component {
    state = {
        data: null,
        isLoading: false
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(result => this.setState({data: result, isLoading: false}))
    }

    render() {
        const {data, isLoading} = this.state;
        return (
            <div>
                <h1>Page User</h1>
                {isLoading && <div>Loading...</div>}
                <UserList data={data}/>
            </div>
        )
    }

}

export default User