import React, {Component} from 'react'
import Task from './Task'


class Todo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            taskStatus: true,
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
        this.setState({todos: [...this.state.todos, [this.state.text, this.state.id, this.state.taskStatus]]})
        this.setState({id: this.state.id + 1})
        this.inputRef.current.value = ''
        this.setState({text:''})
    }

    updateData = (update, taskStatus) =>{
        this.setState({activeTasks: this.state.activeTasks + update})
        this.setState({taskStatus: taskStatus})
    }

    changeDisplay(event){
        alert(event.target.value)
    }


    render() {
        const todos = this.state.todos.map(todo => <Task todo={todo} updateData={this.updateData}/>)
        // activeTodos = this.state.todos.map(todo => todo[2] ? <Task todo={todo} updateData={this.updateData()}/> : console.log('passed'))
        const log = console.log(this.state.todos)
        return (
            <div>
                <table>
                        {todos}
                    {log}
                </table>
                <form>
                    <input ref={this.inputRef} id={'input'} type={'text'} onChange={this.handleChange}></input>
                    <input className={'btn'} type={'button'} value={'add todo'} onClick={this.handleClick}/>
                </form>
                <p>Active tasks: {this.state.activeTasks}</p>
                <div class="input-field col s10">
                    <p class="offset-s1">Display todos: </p>
                    <select class="browser-default col s4 offset-s4" onChange={this.changeDisplay}>
                        <option value={'all'}>All</option>
                        <option value={'active'}>Active</option>
                        <option value={'done'}>Done</option>
                    </select>
                </div>
            </div>
        )

    }

}


export default Todo