import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">{this.props.brand}</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        </nav>);
    }
}