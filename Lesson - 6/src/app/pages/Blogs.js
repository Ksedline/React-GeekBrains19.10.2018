import React from 'react';
import BlogList from '../components/BlogList';

export default class Blogs extends React.Component {
    render() {
        return (<div> { (!this.props.children) ?
            (<BlogList/>) :
            (this.props.children) } </div>);
    }
}