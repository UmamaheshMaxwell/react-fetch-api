import React , {Component} from 'react'

class StudentList extends Component {
    render(){
        return(
            <div>
                <h3>Student Name : {this.props.name}</h3>
                <h3>Student Skill: {this.props.skill}</h3> <br/>
            </div>
        )
    }
}

export default StudentList