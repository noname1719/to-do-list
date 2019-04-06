import React, {Component} from 'react'
import Task from './Task'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            id: 0,
            text: '',
            activeTasks: 0,
            todos: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    handleClick() {
        this.setState({todos: [...this.state.todos, [this.state.text, this.state.id]]})
        this.setState({id: this.state.id + 1})
        this.inputRef.current.value = ''
        this.setState({text:''})
    }

    render() {
        const todos = this.state.todos.map(todo => <Task todo={todo}/>)
        return (
            <div>
                <table>
                        {todos}
                </table>
                <form>
                    <input ref={this.inputRef} id={'input'} type={'text'} onChange={this.handleChange}></input>
                    <input className={'btn'} type={'button'} value={'add todo'} onClick={this.handleClick}/>
                </form>
                <p>Active tasks: {this.state.activeTasks}</p>
            </div>
        )

    }

}


export default Todo