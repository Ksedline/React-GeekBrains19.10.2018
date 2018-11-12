import React from 'react';
import { addPost, getPosts, deletePost, editPost } from '../actions/postsAction';
import { connect } from 'react-redux';
import PostsList from "../components/post/PostsList";
import AddPostForm from "../components/post/AddPost";
import $ from 'jquery';

class Posts extends React.Component {
    render() {
        //console.log(this.props);
        if (this.props.is_loading){
            return <div>Данные загружаются...</div>;
        }

        return (
            <div>
                <AddPostForm />
                <PostsList posts={this.props.posts}/>
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatch(getPosts());

        //Удаление
        $('body').on('click', 'a.post_del', event => {
            event.preventDefault();
            const idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
        });

        //TODO: обработка формы для добавления постов
        $('body').on('click', 'a#post-add', event => {
            event.preventDefault();

            const $input = $('#postName');
            const $inputId = $('#postId');
            const $textarea = $('#postBody');

            if ($input.val() && $textarea.val()) {
                this.props.dispatch(addPost($input.val(), $inputId.val(), $textarea.val()));
            } else {
                alert('Пустое название или содержимое поста');
            }

        });

        //TODO: обработка формы для редактирования постов
        $('body').on('click', 'a.post_edit', event => {
            event.preventDefault();
            const idPost = parseInt($(event.currentTarget).attr('data-id'));
            
            const $title = $('#title' + idPost);
            const $textarea = $('#textarea' + idPost);

            if ($title.val() && $textarea.val()) {
                this.props.dispatch(editPost($title.val(), idPost, $textarea.val()));
            } else {
                alert('Пустое название или содержимое поста');
            }
            
        });
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
    };
}

export default connect(mapStateToProps)(Posts);