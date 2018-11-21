import * as PostsConstants from '../constants/postsConstants';
import merge from 'lodash/merge';

export function postsReducer(state = {
    posts: [],
    is_loading: false
}, action) {
    switch (action.type) {

        case PostsConstants.GET_POSTS_PENDING:
            {
                state = { ...state,
                    is_loading: true
                };

                break;
            }

        case PostsConstants.GET_POSTS_FULFILLED:
            {
                state = { ...state,
                    is_loading: false,
                    posts: action.payload.data
                };
                break;
            }

        case PostsConstants.GET_POSTS_REJECTED:
            {
                state = { ...state,
                    is_loading: false,
                    error_message: action.payload.message
                };
                break;
            }

        case PostsConstants.DELETE_POST:
            {
                let index = null;
                state.posts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload)) {
                        index = i;
                    }
                });

                if (index !== null) {
                    state = merge({}, state);
                    state.posts.splice(index, 1);
                }

                break;
            }

            // Добавление постов
        case PostsConstants.ADD_POST:
            {
                state = {
                    ...state,
                    posts: [action.payload, ...state.posts]
                };

                break;
            }

            //TODO: Редактирование постов

        case PostsConstants.EDIT_POST:
            {
                const id = action.payload.idPost - 1;
            
                state.posts[id].title = action.payload.title;
                state.posts[id].body = action.payload.body;

                state = {
                    ...state,
                    posts: [...state.posts]
                }
            }
    }

    return state; //Обязательно новое состояние, а не просто измененный объект
}