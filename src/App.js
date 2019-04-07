import React, {Component} from 'react';
import Todo from './components/Todo'
import FlavorForm from './components/FlavorForm'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-panel teal lighten-2 center-align col s6 offset-s3">
                        <h3>to do:</h3>
                        <Todo/>
                        <FlavorForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
