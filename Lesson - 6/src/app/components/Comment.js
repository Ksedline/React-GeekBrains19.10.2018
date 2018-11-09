import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>{this.props.name}</h3>
            </div>
            <div className="panel-body">
                <p>{this.props.email}</p>
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}