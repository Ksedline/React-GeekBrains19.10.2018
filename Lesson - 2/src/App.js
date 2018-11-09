import React from 'react';
import ReactDOM from 'react-dom';
import DevName from './module';

class App extends React.Component {
    render() {
        return <div>
                    <h1>Первое приложение на React</h1>
                    <p>Hello React!</p>
                    <p>Разработал {DevName}</p>
                </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));