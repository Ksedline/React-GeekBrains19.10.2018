import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{this.props.name}</p>
                <p><a href={this.props.email}>{this.props.email}</a></p>
                <p><a href={this.props.website}>{this.props.website}</a></p>
                <p>{this.props.phone}</p>
            </div>
        </div>);
    }
}