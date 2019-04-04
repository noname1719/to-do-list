import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
        this.changeStatus = this.changeStatus.bind(this)
    }

    changeStatus() {
        this.state.isActive ? this.setState({isActive: false}) : this.setState({isActive: true})
    }

    render() {
        const status = this.state.isActive ? "Active" : "Done"
        const taskText = this.props.todo[0]
        return (
            <tr>
                <td>
                    {status}
                </td>
                <td>
                    {taskText}
                </td>
                <td>
                    <label style={{marginLeft: '20px'}}>
                        <input type="checkbox" class="filled-in" onClick={this.changeStatus}/>
                        <span style={{marginBottom: '-10px',}}>
                        </span>
                    </label>
                </td>
            </tr>

        )
    }

}

export default Task