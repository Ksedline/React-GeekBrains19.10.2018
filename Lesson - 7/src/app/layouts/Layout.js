import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'React blog';
    }

    /**
     * Вычисление активного пункта меню
     * @param href
     * @return {boolean}
     */
    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>Пользователи</MenuItem>
                    <MenuItem href="/posts" active={this.isActive('/posts')}>Посты</MenuItem>
                    <MenuItem href="/pagenotfound" active={this.isActive('/pagenotfound')}>Страница с ошибкой</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer>
                    <hr/>
                    &copy; 2018
                </footer>
            </div>);
    }
}