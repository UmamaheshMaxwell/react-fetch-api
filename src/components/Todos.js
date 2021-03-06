import React, {Component} from 'react'

class Todo extends Component {
    state = {
        todos: []
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            this.setState({todos: data})
        })
        .catch(console.log)
    }

    render(){
        return(
            <div className="conatiner">
                <div className="col-xs-12">
                    <h1>My Todos</h1>
                    {this.state.todos.map((todo) => {
                        return (
                            <div className="card" key={todo.id}>
                            <div className="card-body">
                                <h5 className="card-title">{todo.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {todo.completed && 
                                        <span>Completed</span>
                                    }
                                    {!todo.completed && 
                                        <span> Pending</span>
                                    }
                                </h6>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Todo