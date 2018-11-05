import React from 'react';

export default class User extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>{this.props.username}</h3>
            </div>
            <div className="panel-body">
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.website}</p>
                <p>{this.props.phone}</p>
            </div>
        </div>);
    }
}