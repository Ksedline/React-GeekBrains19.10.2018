import React from 'react';
import axios from 'axios';
import Blog from "./Blog";

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({posts: response.data});
            });
    }

    render() {
        if(!this.state.posts.length) {
            return null;
        }

        let posts = this.state.posts.map((post, index) => {
            return <Blog key={index} {...post} />;
        });

        return (<div>
            <h1>Блог</h1>
            {posts}
        </div>);
    }
}