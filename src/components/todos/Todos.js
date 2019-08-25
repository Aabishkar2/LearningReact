import React, {Component} from 'react';
import TodosItem from './TodosItem';
class Todos extends Component {
    
    checker() {
        return(
            <h4> Just to check if it does </h4>
        )
    }

    render() {
        this.checker();
        let i = 0
        let _value = this.props.todos;
        return _value.map((todo) => (
            <TodosItem key={i++} todo = {todo} />
        ));
    }
 
}

export default Todos;
