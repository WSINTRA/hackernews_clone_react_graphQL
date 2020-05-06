import React, { Component } from 'react'

class Link extends Component {
    render() {
        return(
            <div>
                <div>{this.props.link.description} ({this.props.link.url}) <br/>
                created on {this.props.link.createdAt}<br/><br/>
                </div>
            </div>
        )
    }
}

export default Link