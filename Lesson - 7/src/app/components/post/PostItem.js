import React from 'react';
import { Link } from 'react-router';

export default class PostItem extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                    <span>
                    <Link to={`/users/${this.props.userId}`}>
                        Автор
                    </Link> &nbsp;
                        <span className="post_title">
                            {this.props.title}
                        </span>
                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <div className="post_body">{this.props.body}</div>
                <div>
                    <input className="title" id={ 'title' + this.props.id } data-id={ this.props.id } placeholder="Заголовок"/>
                    <br/>
                    <textarea className="textarea" id={ 'textarea' + this.props.id } data-id={ this.props.id } placeholder="Пост"/>
                    <br/>
                    <a href="#" className="post_edit" data-id={ this.props.id }>Редактировать пост</a>
                    &nbsp;
                    <a href="#" className="post_del" data-id={ this.props.id }>Удалить пост</a>
                </div>
            </div>
        </div>);
    }
}