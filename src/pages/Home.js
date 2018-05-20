import React, {Component} from 'react';

class Home extends Component {

    state = {
        age: 0
    }

    render() {
        return (
            <div>
                <h1>Page Home</h1>
                <h3>อายุของคุณ : {this.state.age}</h3>
                <button onClick={this.increteAge}> + คลิกบวกอายุ</button> &nbsp;
                <button onClick={this.decreteAge}> - คลิกบวกอายุ</button>

            </div>
        )
    }

    increteAge = () => {
        this.setState((prevSate) => {
            return {
                age: prevSate.age + 1
            }
        })
    }

    decreteAge = () => {
        this.setState((prevSate) => {
            return {
                age: prevSate.age - 1
            }
        })
    }

}

export default Home