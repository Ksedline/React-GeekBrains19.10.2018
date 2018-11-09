import React from 'react';

export default class BlogHeader extends React.Component {
        render() {
            let category = this.props.category.map((element, index) => {
                return <a className="p-2 text-muted" href="#" key={index}>{element}</a>;
            });

            return (
                    <div className="container">
                        <div className="nav-scroller py-1 mb-2">
                            <nav className="nav d-flex justify-content-between">
                                    {category}
                            </nav>
                        </div>
                    </div>);
            }
        }