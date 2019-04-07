import React, {Component} from 'react'
import Task from './Task'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            value: 'cocount',
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

    updateData = (value) =>{
        this.setState({activeTasks: this.state.activeTasks + value})
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const todos = this.state.todos.map(todo => <Task todo={todo} updateData={this.updateData}/>)
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )

    }

}


export default Todo