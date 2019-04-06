import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            textStyle: 'none'
        }
        this.changeStatus = this.changeStatus.bind(this)
    }

    changeStatus() {
        this.state.isActive ? this.setState({isActive: false,textStyle:'line-through'}): this.setState({isActive: true,textStyle:'none'})
    }

    render() {
        const status = this.state.isActive ? "Active" : "Done"
        const taskText = this.props.todo[0]
        const textStyle = this.state.textStyle
        return (
            <tr>
                <td>
                    {status}
                </td>
                <td style={{textDecoration: textStyle}}>
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