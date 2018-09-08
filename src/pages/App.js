import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Header from '../components/layouts/Header';
import Left from '../components/layouts/Left'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="content">
                        <div class="columns">
                            <div class="column is-3">
                            <Left/>
                            </div>
                            <div class="column is-9">
                                {this.props.children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
