import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }
    logMousePosition = e =>{
        this.setState({x:e.clientX, y:e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount(){
        window.removeEventListener('mouseover',this.logMousePosition)
    }
    render() {
        return (
            <div>
                X-{this.state.x} y-{this.state.y}
            </div>
        )
    }
}
