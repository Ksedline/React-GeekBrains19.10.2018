import React from 'react';

export default class AddPost extends React.Component {
    render () {
        return(
        <div id="form">
            <p>Добавить пост</p>
            {/* 'Странно, а почему к input не применяются указанные мной свойства?' */}
            <p><input type="nubmer" id="postId" placeholder="Идентификатор" min="0" max="100" step="1"/></p>
            <p><input id="postName" placeholder="Название"/></p>
            <p><textarea id="postBody" placeholder="Текст"/></p>
            <p><a href="#" id="post-add">Добавить</a></p>
        </div>)
    };
}