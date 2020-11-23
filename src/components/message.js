import React, {Component} from 'react'

class Message extends Component {

    constructor(){
        super()

        this.state = {
            message: 'Welcome to Students'
        }
    }

    changeMessage(){
        console.log('hello')
        this.setState({
            message : "Thanks for joining training sessions !!!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn btn-primary" onClick={() => this.changeMessage()}>Change</button>
            </div>
        )
    }
}

export default Message;