import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import Blogs from './app/pages/Blogs';
import Comments from './app/pages/Comments';

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="blog" component={Blogs} />
            <Route path="comments" component={Comments} />
            <Route path="users" component={Users} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>,
app);