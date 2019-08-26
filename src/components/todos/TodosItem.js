import React, { Component } from 'react'

class TodosItem extends Component {

    giveStyle = () => {
        return {
            textDecoration: this.props.todo.status === 'watched' ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div>
                <div style={this.giveStyle()}>
                    <h3> {this.props.todo.title} </h3>
                </div>
            </div>
        )
    }
}

export default TodosItem;
