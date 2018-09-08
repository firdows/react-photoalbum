import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    // state = {     age: 0 }

    render() {
        return (
            <div>
                <h1>Page Home</h1>
                <h3>อายุของคุณ : {this.props.age}</h3>
                <button onClick={this.props.increteAge}>
                    + คลิกบวกอายุ</button>
                &nbsp;
                <button onClick={this.props.decreteAge}>
                    - คลิกบวกอายุ</button>                
                
                    &nbsp;
                <button onClick={this.props.resetAge}>
                    - Reset</button>

            </div>
        )
    }

    // increteAge = () => {     this.setState((prevSate) => {         return { age:
    // prevSate.age + 1         }     }) } decreteAge = () => {
    // this.setState((prevSate) => {         return {             age: prevSate.age
    // - 1         }     }) }

}

function mapStateToProps(state) {
    return {age: state}
}

function mapDispatchToProps(dispatch) {
    return {
        increteAge: () => {
            dispatch({type: 'INCREMENT'})
        },
        decreteAge: () => {
            dispatch({type: 'DECREMENT'})
        },
        resetAge: () => {
            dispatch({type: 'RESET'})
        }
    }
}

//export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Home)