import React, { Component } from 'react'

export default class MergeName extends Component {

    state={
        newUser:{firstName:'', lastName:''}
    }
    handleFirstName = e =>{
        let value=e.target.value
        this.setState(prevState =>({
            newUser:{...prevState.newUser,
            firstName:value}
        }))
    }
    handleLastName = e =>{
        let value=e.target.value
        this.setState(prevState =>({
            newUser:{...prevState.newUser,
            lastName:value}
        }))
    }
    getFullName(){
        return this.state.newUser.firstName+ " "+ this.state.newUser.lastName
    }
    render() {
        return (
            <div>
                <input type="text"
                placeholder="First Name"
                onChange={this.handleFirstName.bind(this)}
                />
                <input type="text"
                placeholder="Last Name"
                onChange={this.handleLastName.bind(this)}
                />
                <br/>
                Full Name :{this.getFullName()}
            </div>
        )
    }
}
