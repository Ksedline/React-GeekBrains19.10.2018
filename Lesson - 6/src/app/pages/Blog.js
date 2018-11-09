import React from 'react';
import axios from 'axios';

import SingleBlog from '../components/Blog';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response) => {
               this.setState({post: response.data})
            });
    }


    render() {
        return (<div>
            {this.state.post && <SingleBlog {...this.state.post} />}
        </div>);
    }
}