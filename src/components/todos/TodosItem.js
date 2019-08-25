import React, { Component } from 'react'

class TodosItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3> {this.props.todo.title} </h3>
                </div>
            </div>
        )
    }
}

export default TodosItem;
