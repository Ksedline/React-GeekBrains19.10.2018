import React from 'react';
import { Link } from 'react-router';

export default class Blog extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                    <Link to={`/posts/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}