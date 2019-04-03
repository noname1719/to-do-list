import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
    }

    render() {
        const status = this.state.isActive ? "Active" : "Done"
        return (
            <tr>
            <td>
                {status}
            </td>
            <td>
                {this.props.todo[0]}
            </td>
            <td><label style={{marginLeft:'20px'}}><input  type="checkbox" class="filled-in"/><span style={{marginBottom:'-10px',}}></span></label></td>
            </tr>

        )
    }

}

export default Task