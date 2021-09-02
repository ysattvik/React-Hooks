import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    // incrementCount = () =>{
    //     this.setState({
    //         count:this.state.count +1
    //     })
    // }
    incrementCount = () =>{
        this.setState(prevState => {
            return{
                count:prevState.count +1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount} type="submit">count{this.state.count}</button>
            </div>
        )
    }
}
