import React, {Component}  from 'react'

class Welcome extends Component {
    render(){
        return (
            <div>
                <h1>Welcome to Class Component</h1>
                <button className="btn btn-primary">Submmit Again</button>
                <div className="container"><br></br>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Johngalt</td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </div>

        )
    }
}

export default Welcome