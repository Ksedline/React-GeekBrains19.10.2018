import React from 'react';
import axios from 'axios';

import UserProfile from '../components/User';

export default class User extends React.Component {
    constructor(props) {
        super(props);

        //Состояние
        this.state = {
            user: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
               this.setState({user: response.data})
            });
    }

    render() {
        //console.log(this.props);
        return (<div>
            {this.state.user && <UserProfile {...this.state.user} />}
        </div>);
    }
}