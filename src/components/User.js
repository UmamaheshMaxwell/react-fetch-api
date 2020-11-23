import React, {Component} from 'react'

class User extends  Component {

    constructor(){
        super()
        this.state = {
            students: [],
            id: '',
            name: '',
            city: '',
            age: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch("http://localhost:3000/api/student")
        .then(response => response.json())
        .then(data => {this.setState({students: data})
        })

    }

    createStudent = (e) =>{
        console.log(this.state)

        const postRequest = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                city: this.state.city,
                age: this.state.age
            })
        }

        this.clearState()

        fetch("http://localhost:3000/api/student", postRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.getStudents()
        })
    }

    clearState(){
        this.setState({id: ''})
        this.setState({name: ''})
        this.setState({city: ''})
        this.setState({age: ''})
    }

    updateStudent = (e) =>{
        console.log('update the record')

        const putRequest = {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                city: this.state.city,
                age: this.state.age
            })
        }

        this.clearState()

        fetch(`http://localhost:3000/api/student/${this.state.id}`, putRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.getStudents()
        })

    }
    removeStudent = (studentId) =>{
        const deleteRequest = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3000/api/student/${studentId}`, deleteRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.getStudents()
        })
    }

    editStudent =(studentId) => {
        fetch(`http://localhost:3000/api/student/${studentId}`)
        .then(response => response.json())
        .then(data => {
            this.setState({id: data[0].id})
            this.setState({name: data[0].name})
            this.setState({city: data[0].city})
            this.setState({age: data[0].age})
        })

    }

    render() {
        return (
            <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                        <td>

                                <input 
                                    name="id" 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.id}  
                                    readOnly/>
                            </td>
                            <td>

                                 <input 
                                    name="name" 
                                    type="text" 
                                    className="form-control"
                                    value={this.state.name} 
                                    onChange={(data)=>{this.setState({name: data.target.value})}}
                                      />
                            </td>
                            <td>

                                <input 
                                    name="city" 
                                    type="email" 
                                    className="form-control"
                                    value={this.state.city} 
                                    onChange={(data)=>{this.setState({city: data.target.value})}}
                                      />
                            </td>
                            <td>
                                <input  
                                    name="age" 
                                    type="text"  
                                    className="form-control" 
                                    value={this.state.age} 
                                    onChange={(data)=>{this.setState({age: data.target.value})}}
                                    />
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={() => this.createStudent()} >create</button>
                            </td>
                            <td>
                                <button className="btn btn-info" onClick={() => this.updateStudent()}>Update</button>
                            </td>
                        </tr>
                        {this.state.students.map((student) => {
                            return(
                                <tr key={student.id}>     
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.city}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.removeStudent(student.id)} >remove</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => this.editStudent(student.id)} >edit</button>
                                    </td>
                                </tr>
                            )
                       })}
                    </thead>
                </table>
        );
      }

}

export default User